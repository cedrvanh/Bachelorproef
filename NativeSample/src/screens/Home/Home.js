import React from 'react';

import styled from 'styled-components';

import MapContainer from '../../components/Map/MapContainer';
import usePosition from '../../hooks/usePosition';


export default HomeScreen = ({ navigation }) => {
    const { position, error } = usePosition();

    if(error) {
        return <ErrorMessage>Geolocation Error: {error.message}</ErrorMessage>;
    }

    return (
        <Container>
            {position && (
                <MapContainer location={ position } />
            )}
        </Container>
    )
}

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -30px;
    flex: 1;
`

const ErrorMessage = styled.Text`
    flex: 1;
    color: red;
`