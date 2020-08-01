import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

import SignUpForm from '~/components/Form/SignUpForm';
import Logo from '~/components/Logo';

export default SignUpScreen = ({ navigation }) => {
    // Get authenticated user from child component and pass id to next screen
    onNavigate = (user) => {
        navigation.navigate('Hero', {
            user
        })
    }

    return (
        <Container>
            <LogoWrapper>
                <Logo tagline />
            </LogoWrapper>
            <SignUpForm handleRegister={onNavigate} />
            <Message onPress={() => navigation.navigate('SignIn')}>
                Already have an account? <MessageBold>Sign In</MessageBold>
            </Message>
        </Container>
    )
}

const Container = styled.ScrollView.attrs({
    contentContainerStyle:  {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})`
    background-color: ${ colors.PRIMARY_COLOR };
    padding: ${ utils.GUTTER_LARGE };
`

const LogoWrapper = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

const Message = styled.Text`
    fontSize: 12px;
    color: ${ colors.WHITE };
    textTransform: uppercase;
`

const MessageBold = styled.Text`
    fontWeight: bold;
`