import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import { colors } from '~/styles';

import LottieWrapper from '~/components/LottieWrapper';

export default LoadingIndicator = () => {
    return (
        <Modal 
            isVisible={true}
            backdropColor={colors.PRIMARY_COLOR}
            backdropOpacity={1}
            style={{
                flex: 1
            }}
        >
            <Container>
                <LottieWrapper 
                    source={require('~/assets/lottie/loader.json')}
                    style={{
                        width: 250,
                    }}
                />
            </Container>
        </Modal>
    )
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${ colors.PRIMARY_COLOR };
`