import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '../styles';

export default Logo = ({ tagline = false }) => {
    return (
        <React.Fragment>
            <Title>Augmented Routes</Title>
            {tagline &&
                <TagLine>Discover the rich history near you</TagLine>
            }
        </React.Fragment>
    )
}

const Title = styled.Text`
    color: ${ colors.WHITE };
    fontWeight: bold;
    fontSize: 28px;
    margin: ${ utils.GUTTER_SMALL } 0;
    textTransform: uppercase;
`

const TagLine = styled.Text`
    color: ${ colors.TEXT_PRIMARY_LIGHT_COLOR }
`