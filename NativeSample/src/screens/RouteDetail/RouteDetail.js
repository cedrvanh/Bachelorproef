import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components';

import { colors, utils, typography, map as mapStyle } from '~/styles';

import { handleError } from '~/services/api';
import { RouteService as _routeService } from '~/services/RouteService';

import MapPolyline from '~/components/Map/MapPolyline';
import RouteCard from '~/components/Route/RouteCard';
import Header from '~/components/Header';
import MapMarker from '~/components/Map/MapMarker';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default RouteDetailScreen = ({ navigation }) => {
    const _map = useRef();
    const [currentRoute, setCurrentRoute] = useState({
        data: navigation.getParam('route', null),
        coords: [],
        waypoints: [] 
    });

    const INITIAL_REGION = { 
        latitude: 50.800376,
        longitude: 3.251657,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }

    useEffect(() => {
        onMapInit();
    }, []);

    // Init map
    onMapInit = () => {
        _map.current.fitToElements(true);
        let locations = getRouteCoordinates(currentRoute.data);
        setCurrentRoute(prevState => ({
            ...prevState,
            coords: locations
        }));
        setTimeout(() => onMapZoom(locations, true), 1500); // Delay so you can see the animation
    }

    // Return route task coordinates into an array
    getRouteCoordinates = ({ tasks }) => {
        return tasks.map(({ location }) => {
            return {
                latitude: parseFloat(location.coords.latitude),
                longitude: parseFloat(location.coords.longitude)
            };
        });
    }

    renderMarkers = () => {
        return currentRoute.data.tasks.map(({location}, index) => {
            return (
                <MapMarker 
                    key={`${index}${new Date()}`}
                    coordinate={{
                        latitude: parseFloat(location.coords.latitude),
                        longitude: parseFloat(location.coords.longitude)
                    }}
                />
            )
        });
    }

    // Zoom map to coordinates
    onMapZoom = (coordinates, animated) => {
        _map.current.fitToCoordinates(coordinates, {
            edgePadding: {
                top: 100, 
                left: 50, 
                right: 50,
                bottom: SCREEN_HEIGHT + (SCREEN_HEIGHT/1.75)
            },
            animated
        });
    }

    onRouteStart = (id, index) => {
        try {
            _routeService.startRoute(id, index);
            navigation.navigate('Home');
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <Container>
            <StyledMap
                ref={_map}
                provider={PROVIDER_GOOGLE}
                initialRegion={INITIAL_REGION}
                pitchEnabled={false}
                scrollEnabled={false}
                showsScale={false}
                showsCompass={false}
                showsTraffic={false}
                zoomEnabled={false}
                zoomControlEnabled={false}
                minZoomLevel={10}
                customMapStyle={mapStyle}
            >
                {renderMarkers()}
                <MapPolyline
                    coordinates={currentRoute.coords}
                />
            </StyledMap>
            <OverlayContainer>
                <Header 
                    title={"Quest Info"}
                    onBack={() => navigation.navigate('Home')}
                />
                <RouteCard 
                    route={currentRoute.data}
                    onRouteStart={onRouteStart}
                />
            </OverlayContainer>
        </Container>
    )
}

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -30px;
    flex: 1;
    elevation: 0;
    backgroundColor: ${colors.PLACEHOLDER_COLOR};
`

const OverlayContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
    padding: 0 ${utils.GUTTER_LARGE};
`

const StyledMap = styled(MapView)`
    flex: 1;
    width: ${SCREEN_WIDTH}px;
    height: ${SCREEN_HEIGHT}px;
    elevation: -1;
`