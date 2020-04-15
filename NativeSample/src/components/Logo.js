import React from 'react';
import styled from 'styled-components';

import colors from "../styles/colors";


export default Logo = ({ tagline = false }) => {
    return (
        <Wrapper>
            <Title>Augmented Routes</Title>
            {tagline &&
                <TagLine>Discover the rich history near you</TagLine>
            }
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

const Title = styled.Text`
    color: ${ colors.TEXT_COLOR };
    fontWeight: bold;
    fontSize: 28px;
    margin: 10px 0;
    textTransform: uppercase;
`

const TagLine = styled.Text`
    color: ${ colors.TEXT_GREY_COLOR }
`