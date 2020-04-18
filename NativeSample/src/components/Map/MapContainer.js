import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styled from 'styled-components';

import mapStyle from '../../styles/map';

export default MapContainer = ({ location }) => {
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = 0.01

    return (
        <Container>
            {/* {location !== null && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={{
                        ...location,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                    customMapStyle={mapStyle}
                    style={{ flex: 1 }}
                />
            )} */}
        </Container>
    )
}

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -25px;
    flex: 1;
`