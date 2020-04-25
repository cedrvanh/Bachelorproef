import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import UserDot from './UserDot';
import MapMarker from './MapMarker';

import { colors, map as mapStyle } from '../../styles';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default MapContainer = ({ location }) => {    
    const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    // TODO: Fetch from API
    const markers = [
        {
            title: "Kouter",
            coords: {
                latitude: 50.845045, 
                longitude: 3.210870
            }
        },
        {
            title: "Gravensteen",
            coords: {
                latitude: 50.843333, 
                longitude: 3.216014
            }
        },
        {
            title: "fsdfsdf",
            coords: {
                latitude: 50.845045, 
                longitude: 3.210870
            }
        },
    ]

    const region = { 
        latitude: 50.84269204,
        longitude: 3.21211998,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            showsCompass={false}
            initialRegion={region}
            customMapStyle={mapStyle}
            style={styles.map}
            minZoomLevel={8}
        >
            <UserDot location={region} />

            {markers && markers.map((marker, index) => (
                <MapMarker label={marker.title} coords={marker.coords} key={ index } />
            ))}
        </MapView>
    )
}


const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        elevation: -1
    }
})