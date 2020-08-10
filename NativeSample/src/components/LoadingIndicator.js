import React from 'react';
import styled from 'styled-components';

import { colors } from '~/styles';

import LottieWrapper from '~/components/LottieWrapper';

export default LoadingIndicator = () => {
    return (
        <Container>
            <LottieWrapper 
                source={require('~/assets/lottie/loader.json')}
                style={{
                    width: 250,
                }}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${ colors.PRIMARY_COLOR };
`