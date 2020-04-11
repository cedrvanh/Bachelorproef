import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components';

export default class MapScreen extends Component {
    render() {
        return (
            <Container>
                <Title>Dit is de Map Pagina</Title>
            </Container>
        )
    }
}

const Container = styled.View`
    background-color: red;
    flex: 1;
`

const Title = styled.Text`
    color: blue;
    fontSize: 20px;
`