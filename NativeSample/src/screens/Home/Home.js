import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';
import MapContainer from '../../components/Map/MapContainer';
import usePosition from '../../hooks/usePosition';

export default HomeScreen = ({ navigation }) => {
    // const { latitude, longitude, error } = usePosition();

    // if(error) {
    //     return `Geolocation Error: ${error}`;
    // }

    // return <MapContainer location={{ latitude, longitude }} />
    return <Container />
}

const Container = styled.View`
    flex: 1;
    backgroundColor: ${ colors.DARK_COLOR };
`