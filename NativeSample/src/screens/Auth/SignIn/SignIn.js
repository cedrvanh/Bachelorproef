import React from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components';

import SignInForm from '../../../components/SignInForm';

export default SignInScreen = ({ navigation }) => {
    _signInUser = async () => {
        await AsyncStorage.setItem('token', 'aaa');
        navigation.navigate('Home');
    }

    return (
        <Container>
            <SignInForm />
        </Container>
    )
}

const Container = styled.View`
    background-color: red;
    padding: 16px;
    flex: 1;
`;

const Title = styled.Text`
    color: blue;
    fontSize: 24px;
`;
