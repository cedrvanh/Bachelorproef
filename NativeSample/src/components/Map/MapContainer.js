import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import styled from 'styled-components';

import { colors, map as mapStyle } from '~/styles';

import UserDot from '~/components/Map/UserDot';
import MapMarker from '~/components/Map/MapMarker';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default MapContainer = ({ location, routes, setCardVisibility, onRoute, currentRoute, ...props }) => {
    const [selectedRoute, setSelectedRoute] = useState(null);
    const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    const INITIAL_REGION = { 
        latitude: 50.84269204,
        longitude: 3.21211998,
        // latitude: location.latitude,
        // longitude: location.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }

    // Render random markers around initialRegion
    renderRandomMarkers = (amount) => {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = region;

        return new Array(amount).fill().map((x, i) => (
            <MapMarker 
                key={i} 
                label={`Gravensteen ${i}`}
                coordinate={{
                    latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
                    longitude: longitude + (Math.random() - 0.5) * longitudeDelta
                }}
                onPress={selectMarker}
            />
        ));
    }

    // Render markers from fetched data
    renderMarkers = () => {
        if(!onRoute) {
            return routes.map(({id, name, tasks}) => {
                return (
                    <MapMarker 
                        key={`${id}${new Date()}`}
                        label={name}
                        coordinate={{
                            latitude: parseFloat(tasks[0].location.coords.latitude),
                            longitude: parseFloat(tasks[0].location.coords.longitude)
                        }}
                        onPress={selectMarker}
                    />
                )
    
            });
        } else {
            return (
                <React.Fragment>
                    {currentRoute.tasks && (
                        <MapMarker 
                            key={`${currentRoute.id}${new Date()}`}
                            label={currentRoute.tasks[onRoute.currentIndex].name}
                            coordinate={{
                                latitude: parseFloat(currentRoute.tasks[onRoute.currentIndex].location.coords.latitude),
                                longitude: parseFloat(currentRoute.tasks[onRoute.currentIndex].location.coords.longitude)
                            }}
                        />   
                    )}
                </React.Fragment>
            )
        }
    }

    selectMarker = ({ position }) => {
        setSelectedRoute(position);
        setCardVisibility();
    }

    return (
        <StyledMap
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            minZoomLevel={8}
            showsScale={false}
            showsCompass={false}
            showsTraffic={false}
            zoomControlEnabled={false}
            pitchEnabled={false}
            loadingEnabled={true}
            loadingIndicatorColor={colors.ACCENT_COLOR}
            loadingBackgroundColor={colors.PRIMARY_COLOR}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            clusterColor={colors.ACCENT_COLOR}
            maxZoom={13}
            {...props}
        >
            {renderMarkers()}
            {/* <UserDot location={location} /> */}
        </StyledMap>
    )
}

const StyledMap = styled(MapView)`
    flex: 1;
    width: ${SCREEN_WIDTH}px;
    height: ${SCREEN_HEIGHT}px;
    elevation: -1;
`