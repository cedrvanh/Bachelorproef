import React from 'react';
import { Marker } from 'react-native-maps';

import styled from 'styled-components';

import colors from '../../styles/colors';

export default UserDot = ({ location }) => {

    /*
    TODO: Style User heading FOV cone
    */
   
    return (
        <Marker 
            coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
            }}
            rotation={location.heading}
        >
            <UserMarker />
        </Marker>
    )
}

const UserMarker = styled.View`
    width: 20px;
    height: 20px;
    borderWidth: 5px;
    borderColor: ${ colors.PRIMARY_COLOR };
    borderRadius: 16px;
    backgroundColor: ${ colors.WHITE };
`