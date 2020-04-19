import React from 'react';
import styled from 'styled-components';

import { colors, utils, typography } from '../styles';

export default Header = ({ title }) => {
    return (
        <Wrapper>
            <Title>{ title }</Title>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    padding: ${ utils.GUTTER } 0;
`

const Title = styled.Text`
    fontSize: ${ typography.FONT_SIZE_HEADING };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    color: ${ colors.WHITE }
`