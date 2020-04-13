import React, { Component } from 'react';
import styled from 'styled-components';

export default class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Title>Home Pagina</Title>
            </Container>
        )
    }
}

const Container = styled.View`
    background-color: red;
    flex: 1;
`;

const Title = styled.Text`
    color: blue;
    fontSize: 24px;
`;
