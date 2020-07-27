import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '../styles';

export default Logo = ({ tagline = false }) => {
    return (
        <React.Fragment>
            {tagline &&
                <TagLine>An augmented reality experience</TagLine>
            }
            <Title>Augmented Hunt</Title>
        </React.Fragment>
    )
}

const Title = styled.Text`
    color: ${ colors.WHITE };
    fontWeight: bold;
    fontSize: 30px;
    margin: ${ utils.GUTTER_TINY } 0 0 0;
    textTransform: uppercase;
`

const TagLine = styled.Text`
    color: ${ colors.TEXT_PRIMARY_LIGHT_COLOR };
    textTransform: uppercase;
    fontSize: 12px;
`