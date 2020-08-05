import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import styled from 'styled-components';

import { colors, map as mapStyle } from '~/styles';

import UserDot from '~/components/Map/UserDot';
import MapMarker from '~/components/Map/MapMarker';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default MapContainer = ({ location }) => {
    const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
    const LATITUDE_DELTA = 0.01;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    console.log('Render');

    // TODO: Fetch from API
    const region = { 
        latitude: 50.84269204,
        longitude: 3.21211998,
        // latitude: location.latitude,
        // longitude: location.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }


    // Render random markers around initialRegion
    renderRandomMarkers = (amount) => {
        const { latitude, longitude, latitudeDelta, longitudeDelta } = region;

        return new Array(amount).fill().map((x, i) => (
            <MapMarker 
                key={i} 
                label={`Gravensteen ${i}`}
                coordinate={{
                    latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
                    longitude: longitude + (Math.random() - 0.5) * longitudeDelta
                }}
            />
        ));
    }

    return (
        <StyledMap
            provider={PROVIDER_GOOGLE}
            initialRegion={region}
            minZoomLevel={8}
            showsScale={false}
            showsCompass={false}
            showsTraffic={false}
            zoomControlEnabled={false}
            pitchEnabled={false}
            loadingEnabled={true}
            loadingIndicatorColor={colors.ACCENT_COLOR}
            loadingBackgroundColor={colors.PRIMARY_COLOR}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            clusterColor={colors.ACCENT_COLOR}
            maxZoom={13}
        >
            {/* <UserDot location={location} /> */}
            {/* {renderRandomMarkers(10)} */}
            {/* {markers && markers.map((marker, index) => (
                <MapMarker label={marker.title} coords={marker.coords} key={ index } />
            ))} */}
        </StyledMap>
    )
}

const StyledMap = styled(MapView)`
    flex: 1;
    width: ${SCREEN_WIDTH}px;
    height: ${SCREEN_HEIGHT}px;
    elevation: -1;
`