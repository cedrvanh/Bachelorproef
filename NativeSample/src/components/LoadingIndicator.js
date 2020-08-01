import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

export default LoadingIndicator = () => {
    return (
        <Container>
            <ActivityIndicator size="large" color={ colors.ACCENT_COLOR } />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
`