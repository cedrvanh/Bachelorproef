import React from 'react';
import styled from 'styled-components';

export default ProfileScreen = () => {
    return (
        <Container>
            <Title>Profile Screen</Title>
        </Container>
    )
}

const Container = styled.View`
    background-color: green;
    flex: 1;
`;

const Title = styled.Text`
    color: blue;
    fontSize: 24px;
`;
