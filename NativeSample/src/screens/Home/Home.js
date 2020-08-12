import React, { useState, useEffect, createRef } from 'react';
import { PermissionsAndroid, Text } from 'react-native';
import { getDistance } from 'geolib';
import styled from 'styled-components';

import usePosition from '~/hooks/usePosition';

import { RouteService as _routeService } from '~/services/RouteService';
import { handleError } from '~/services/api';

import { colors, utils, typography } from '~/styles';

import MapContainer from '~/components/Map/MapContainer';
import PermissionModal from '~/components/Map/PermissionModal';
import Header from '~/components/Header';
import Carousel from '~/components/Carousel';
import ProfileIcon from '~/components/Base/ProfileIcon';
import LoadingIndicator from '~/components/LoadingIndicator';
import Icon from '~/components/Base/Icon';
import TaskCard from '~/components/Route/TaskCard';

export default HomeScreen = ({ navigation }) => {
    const [isCardsVisible, setIsCardsVisiblity] = useState(false);
    const [isGranted, setIsGranted] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [onRoute, setOnRoute] = useState({});
    const [currentRoute, setCurrentRoute] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isNearLocation, setIsNearLocation] = useState(false);
    
    const {position, error} = usePosition();
    
    useEffect(() => {
        checkPermission();
        checkRoute();
        getRouteInformation();
    }, [isLoading]);

    useEffect(() => {
        if(onRoute) {
            watchGeolocation()
                .then(status => setIsNearLocation(status))
                .catch(err => handleError(err));
        }
    }, [position])

    // Check if Location permission have been granted
    checkPermission = async () => {
        const status = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        setIsGranted(status);
    }

    checkRoute = async () => {
        let status = await _routeService.checkRouteStatus();
        setOnRoute(status);
    }

    getRouteInformation = async () => {
        if (onRoute && onRoute.status) {
            const { data } = await _routeService.getRouteById(onRoute.currentRoute);
            setCurrentRoute(data);
            setIsLoading(false);
        } else {
            const { data } = await _routeService.getRoutes();
            setRoutes(data); 
            setIsLoading(false);
        }
    }

    onRouteStart = (item) => {
        navigation.navigate('Detail', {
            route: item
        });
    }
    
    onRouteCancel = async () => {
        console.log('Clicked');
        await _routeService.cancelRoute();
        setCurrentRoute({});
        setOnRoute({});
    }

    calculdateDistanceNearTask = () => {
        // let distance = getDistance(position, currentRoute.tasks[onRoute.currentIndex].locations.coords); 
        let distance = getDistance(position, {
            latitude: 50.84269204,
            longitude: 3.21211998,
        });
        return distance;
    }

    watchGeolocation = () => {
        return new Promise((resolve, reject) => {
            let distance = calculdateDistanceNearTask();
            if (distance <= 10) resolve(true);
        });
    }

    openCamera = () => {
        navigation.navigate('Camera', {
            task: currentRoute.tasks[onRoute.currentIndex],
            onRoute: onRoute,
        });
    }

    // Render map component
    renderMap = () => {
        if(!isLoading) {
            return (
                <React.Fragment>
                    <MapContainer
                        location={position}
                        setCardVisibility={() => {
                            if (!isCardsVisible) {
                                setIsCardsVisiblity(true);
                            }
                        }}
                        routes={routes}
                        onRoute={onRoute}
                        currentRoute={currentRoute}
                    />

                    <OverlayContainer>
                        <Topbar>
                            <Icon 
                                name="ios-trophy" 
                                color={colors.WHITE}
                                size={32}
                                onPress={() => navigation.navigate('Leaderboard')}
                            />
                            <Title>{onRoute && onRoute.status ? 'On a quest' : 'Go on a quest'}</Title>
                            <ProfileIcon />
                        </Topbar>
                        {onRoute && onRoute.status && currentRoute && (
                            <TaskCard 
                                currentTask={onRoute.currentIndex} 
                                route={currentRoute}
                                onRouteCancel={onRouteCancel}
                                nearLocation={isNearLocation}
                                openCamera={openCamera}
                            />
                        )}
                        {isCardsVisible && (
                            <CarouselWrapper>
                                <Carousel 
                                    items={routes}
                                    onRouteStart={onRouteStart}
                                />
                            </CarouselWrapper>
                        )}
                    </OverlayContainer>
                </React.Fragment>
            )
        }
    }

    if(isLoading) {
        return <LoadingIndicator />
    }
    return (
        <Container>
            {isGranted ? renderMap() : <PermissionModal onRequestPermission={(status) => setIsGranted(status)} />}
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
    backgroundColor: ${ colors.PLACEHOLDER_COLOR };
`

const OverlayContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
`

const CarouselWrapper = styled.View`
    position: absolute;
    bottom: 75px;
    left: 0;
`

const Topbar = styled.View`
    flexDirection: row;
    padding: ${utils.GUTTER_LARGE};
    height: ${utils.HEADER_HEIGHT};
    justifyContent: space-between;
    alignItems: center;
`

const Title = styled.Text`
    color: ${colors.WHITE}
    fontSize: ${typography.FONT_SIZE_HEADING};
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    textTransform: uppercase;
`