import React, { useState, useEffect } from 'react';
import { Text, PermissionsAndroid } from 'react-native';
import styled from 'styled-components';

import MapContainer from '~/components/Map/MapContainer';
import Header from '~/components/Header';
import usePosition from '~/hooks/usePosition';
import Carousel from '~/components/Carousel';
import UserIcon from '~/components/UserIcon';

import PermissionModal from '~/components/Map/PermissionModal';


export default HomeScreen = ({ navigation }) => {
    const { position, error } = usePosition();
    const [visible, setVisiblity] = useState(false);
    const [granted, setGranted] = useState(false);
    // if(error) {
    //     return <ErrorMessage>Geolocation Error: {error.message}</ErrorMessage>;
    // }

    useEffect(() => {
        checkPermission();
    }, [granted]);

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
                    {/*<UserIcon />*/}
                    <Header title ={ 'Select a route' } />
                    {/* 
                    {visible && (
                        <CarouselWrapper>
                            <Carousel />
                        </CarouselWrapper>
                    )} */}
                </Content>
            </Container>
        )
    }

    return (
        <React.Fragment>
            {granted ? renderMap() : <PermissionModal onRequestPermission={(status) => setGranted(status)} />}
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
    backgroundColor: red;
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

const ErrorMessage = styled.Text`
    flex: 1;
    color: red;
`