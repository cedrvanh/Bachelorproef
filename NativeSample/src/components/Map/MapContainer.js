import React from 'react';
import { Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import UserDot from './UserDot';
import mapStyle from '../../styles/map';


export default MapContainer = ({ location }) => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;

    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }}
            customMapStyle={mapStyle}
            style={{ flex: 1 }}
        >
            <UserDot location={location} />
        </MapView>
    )
}
