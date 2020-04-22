import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import UserDot from './UserDot';
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
    ]

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            showsCompass={false}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }}
            customMapStyle={mapStyle}
            style={styles.map}
        >
            <UserDot location={location} />

            {/* {markers && markers.map(marker => (
                <Marker.Animated
                    key={marker.title}
                    title={marker.title}
                    coordinate={{
                        latitude: marker.coords.latitude, 
                        longitude: marker.coords.longitude
                    }}
                    pinColor={ colors.ACCENT_COLOR }
                />
            ))} */}
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