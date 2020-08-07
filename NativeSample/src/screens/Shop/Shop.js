import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '~/components/Header';

import { colors, utils } from '~/styles';

export default ShopScreen = ({ navigation }) => {
    return (
        <Container>
            <Header />
        </Container>
    )
}

const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -30px;
    flex: 1;
    elevation: 0;
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const OverlayContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
`

const CarouselWrapper = styled.View`
    position: absolute;
    bottom: 75px;
    left: 0;
`

const Topbar = styled.View`
    padding: ${utils.GUTTER};
    height: ${utils.HEADER_HEIGHT};
    justifyContent: center;
    alignItems: flex-end;
`