import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import styled from 'styled-components';

import usePosition from '~/hooks/usePosition';

import MapContainer from '~/components/Map/MapContainer';
import PermissionModal from '~/components/Map/PermissionModal';
import Header from '~/components/Header';
import Carousel from '~/components/Carousel';
import UserIcon from '~/components/UserIcon';
import Error from '~/components/Base/Error';

import { colors } from '~/styles';

export default HomeScreen = ({ navigation }) => {
    const { position, error } = usePosition();
    const [visible, setVisiblity] = useState(false);
    const [isGranted, setGranted] = useState(false);

    useEffect(() => {
        checkPermission();
    }, [isGranted]);


    // Check if Location permission have been granted
    checkPermission = async () => {
        const status = await PermissionsAndroid.check( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION );
        setGranted(status);
    }

    // Render map component
    renderMap = () => {
        return (
            <Container>
                {position && (
                    <MapContainer location={ position } />
                )}
                <Content>
                    <UserIcon />
                    {/* <Header title ={ 'Select a route' } /> */}
                    {visible && (
                        <CarouselWrapper>
                            <Carousel />
                        </CarouselWrapper>
                    )}
                </Content>
            </Container>
        )
    }

    console.log(error);
    
    if(error) {
        return <Error>Geolocation Error: {error}</Error>;
    }

    return (
        <React.Fragment>
            {isGranted ? renderMap() : <PermissionModal onRequestPermission={(status) => setGranted(status)} />}
        </React.Fragment>
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
    backgroundColor: ${ colors.PRIMARY_LIGHT_COLOR };
`

const Content = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
    alignItems: center;
`

const CarouselWrapper = styled.View`
    position: absolute;
    bottom: 75px;
    left: 0;
`