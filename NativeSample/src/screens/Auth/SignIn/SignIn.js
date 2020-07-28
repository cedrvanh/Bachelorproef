import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

import SignInForm from '~/components/Form/SignInForm';
import Logo from '~/components/Logo';

export default SignInScreen = ({ navigation }) => {
    return (
        <Container>
            <LogoWrapper>
                <Logo tagline />
            </LogoWrapper>
            <SignInForm handleLogin={() => navigation.navigate('Home')} />
            <Message onPress={() => navigation.navigate('SignUp')}>
                Don't have an account? <MessageBold>Sign Up</MessageBold>
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