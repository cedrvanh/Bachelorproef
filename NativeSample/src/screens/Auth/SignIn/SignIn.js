import React from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components';

import colors from '../../../styles/colors';

import SignInForm from '../../../components/SignInForm';
import Logo from '../../../components/Logo';

export default SignInScreen = ({ navigation }) => {
    _signInUser = async () => {
        await AsyncStorage.setItem('token', 'aaa');
        navigation.navigate('Home');
    }

    return (
        <Container>
            <Logo />
            <SignInForm />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    background-color: ${ colors.SECONDARY_COLOR };
    padding: 24px;
`