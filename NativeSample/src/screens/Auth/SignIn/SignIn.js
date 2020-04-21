import React from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components';

import { colors, utils } from '../../../styles';

import SignInForm from '../../../components/SignInForm';
import Logo from '../../../components/Logo';

export default SignInScreen = ({ navigation }) => {
    return (
        <Container>
            <LogoWrapper>
                <Logo tagline />
            </LogoWrapper>
            <SignInForm />
            <Message onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Message>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    background-color: ${ colors.SECONDARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`

const LogoWrapper = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

const Message = styled.Text`
    color: ${ colors.WHITE }
`