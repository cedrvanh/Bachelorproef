import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

import SignInForm from '~/components/SignInForm';
import Logo from '~/components/Logo';

export default SignInScreen = ({ navigation }) => {
    return (
        <Container>
            <LogoWrapper>
                <Logo tagline />
            </LogoWrapper>
            <SignInForm handleLogin={() => navigation.navigate('Home')} />
            <Message onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Message>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    background-color: ${ colors.PRIMARY_COLOR };
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