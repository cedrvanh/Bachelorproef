import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styled from 'styled-components';

import { colors } from '~/styles';

import config from '~/helpers/config';

export default MapPolyline = ({ coordinates }) => {
    const MAP_MODE = "WALKING";    

    return (
        <MapViewDirections
            apikey={config.GOOGLE_API_KEY}
            origin={coordinates[0]}
            destination={coordinates[coordinates.length - 1]}
            waypoints={(coordinates.length > 2) ? coordinates.slice(1, -1) : null}
            mode={MAP_MODE}
            strokeColor={colors.ACCENT_COLOR}
            strokeWidth={3}
        />
    )
}
