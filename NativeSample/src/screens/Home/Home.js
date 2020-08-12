import React, { useState, useEffect, createRef } from 'react';
import { PermissionsAndroid, Text } from 'react-native';
import styled from 'styled-components';

import usePosition from '~/hooks/usePosition';

import { RouteService as _routeService } from '~/services/RouteService';

import MapContainer from '~/components/Map/MapContainer';
import PermissionModal from '~/components/Map/PermissionModal';
import Header from '~/components/Header';
import Carousel from '~/components/Carousel';
import ProfileIcon from '~/components/Base/ProfileIcon';
import LoadingIndicator from '~/components/LoadingIndicator';
import Icon from '~/components/Base/Icon';

import { colors, utils } from '~/styles';

export default HomeScreen = ({ navigation }) => {
    const {position, error} = usePosition();
    const [isCardsVisible, setIsCardsVisiblity] = useState(false);
    const [isGranted, setIsGranted] = useState(false);
    const [routes, setRoutes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkPermission();
        getRoutes();
    }, [isLoading]);

    // Check if Location permission have been granted
    checkPermission = async () => {
        const status = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        setIsGranted(status);
    }

    centerMapOnMarker = (index, marker) => {
        console.log(selectedItem);
        // return selectedItem;
    }

    getRoutes = async () => {
        const { data } = await _routeService.getRoutes();
        setRoutes(data);
        setIsLoading(false);
    }

    onRouteStart = (item) => {
        navigation.navigate('Detail', {
            route: item
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
                    />

                    <OverlayContainer>
                        <Topbar>
                            <Icon 
                                name="ios-trophy" 
                                color={colors.WHITE}
                                size={32}
                                onPress={() => navigation.navigate('Leaderboard')}
                            />
                            <ProfileIcon />
                        </Topbar>
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

    return (
        // <LoadingIndicator />
        <Container>
            {isGranted ? renderMap() : <PermissionModal onRequestPermission={(status) => setGranted(status)} />}
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