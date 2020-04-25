import React from 'react';
import { Marker } from 'react-native-maps';

import Icon from '../Icon';

const MapMarker = ({ label, coords }) => {
    return (
        <Marker.Animated
            title={label}
            tracksViewChanges={false}
            coordinate={{
                latitude: coords.latitude, 
                longitude: coords.longitude
            }}
        >
            <Icon name={"ios-pin"} size={42}/>
        </Marker.Animated>
    )
}

export default MapMakrker = React.memo(MapMarker);