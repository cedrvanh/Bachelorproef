import React, { useState } from 'react';

import styled from 'styled-components';

import MapContainer from '~/components/Map/MapContainer';
import Header from '~/components/Header';
import usePosition from '~/hooks/usePosition';
import Carousel from '~/components/Carousel';
import UserIcon from '~/components/UserIcon';


export default HomeScreen = ({ navigation }) => {
    const { position, error } = usePosition();
    const { visible, setVisiblity } = useState(false);

    if(error) {
        return <ErrorMessage>Geolocation Error: {error.message}</ErrorMessage>;
    }

    return (
        <Container>
             {position && (
                <MapContainer location={ position } />
            )}
            <Content>
                {/*<UserIcon />*/}
                <Header title ={ 'Select a route' } />
{/* 
                {visible && (
                    <CarouselWrapper>
                        <Carousel />
                    </CarouselWrapper>
                )} */}
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

const CarouselWrapper = styled.View`
    position: absolute;
    bottom: 75px;
    left: 0;
`

const ErrorMessage = styled.Text`
    flex: 1;
    color: red;
`