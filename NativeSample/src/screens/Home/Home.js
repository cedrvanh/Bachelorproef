import React from 'react';

import styled from 'styled-components';

import MapContainer from '../../components/Map/MapContainer';
import Header from '../../components/Header';
import usePosition from '../../hooks/usePosition';
import Carousel from '../../components/Carousel';


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
            <Content>
                <Header title ={ 'Select a route' || navigation.state.routeName } />
                <Carousel />
            </Content>
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
    elevation: 0;
    backgroundColor: grey;
`

const Content = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
    alignItems: center;
`

const ErrorMessage = styled.Text`
    flex: 1;
    color: red;
`