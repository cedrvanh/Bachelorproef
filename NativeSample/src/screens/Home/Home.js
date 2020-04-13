import React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';

export default HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Title>Home Pagina</Title>
            <Button 
                title="Go to Profile" 
                onPress={() => navigation.navigate('Profile')}
            />
        </Container>
    )
}

const Container = styled.View`
    background-color: ${ colors.SECONDARY_COLOR }
    flex: 1;
`;

const Title = styled.Text`
    color: ${ colors.PRIMARY_COLOR }
    fontSize: 24px;
`;

const Button = styled.Button`
    background-color: green;
`