import React, { useState, useEffect, createRef } from 'react';
import { PermissionsAndroid, Text } from 'react-native';
import styled from 'styled-components';

import usePosition from '~/hooks/usePosition';

import MapContainer from '~/components/Map/MapContainer';
import PermissionModal from '~/components/Map/PermissionModal';
import Header from '~/components/Header';
import Carousel from '~/components/Carousel';
import ProfileIcon from '~/components/Base/ProfileIcon';
import LoadingIndicator from '~/components/LoadingIndicator';

import { colors, utils } from '~/styles';

export default HomeScreen = ({ navigation }) => {
    const { position, error } = usePosition();
    const [visible, setVisiblity] = useState(true);
    const [isGranted, setGranted] = useState(false);

    useEffect(() => {
        checkPermission();
    }, []);

    // Check if Location permission have been granted
    checkPermission = async () => {
        const status = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        setGranted(status);
    }


    centerMapOnMarker = (item, marker) => {
        console.log(item);
        console.log(marker);
    }

    // Render map component
    renderMap = () => {
        return (
            <React.Fragment>
                <MapContainer location={position} />

                <OverlayContainer>
                    <Topbar>
                        <ProfileIcon />
                    </Topbar>
                    {visible && (
                        <CarouselWrapper>
                            <Carousel onSnapToItem={centerMapOnMarker} />
                        </CarouselWrapper>
                    )}
                </OverlayContainer>
            </React.Fragment>
        )
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
    padding: ${utils.GUTTER};
    height: ${utils.HEADER_HEIGHT};
    justifyContent: center;
    alignItems: flex-end;
`