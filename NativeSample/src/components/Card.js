import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '../styles';

export default Card = ({ title }) => {
    return (
        <Wrapper>
            <Title>{ title }</Title>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    height: 150px;
    borderRadius: ${ utils.BORDER_RADIUS };
    padding: 8px 16px;
    backgroundColor: ${ colors.WHITE };
    elevation: 1;
`

const Title = styled.Text`
    fontSize: 28px;
`