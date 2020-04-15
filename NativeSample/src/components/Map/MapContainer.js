import React, { useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components';

import mapStyle from '../../styles/map';

export default MapContainer = () => {

    const [region, setRegion] = useState({
        latitude: 51.053447,
        longitude: 3.719014,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    })

    return (
        <Container>
            <MapView 
                initialRegion={region}
                customMapStyle={mapStyle}
                style={{ flex: 1 }}
            />
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