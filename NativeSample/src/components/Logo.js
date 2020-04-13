import React from 'react';
import styled from 'styled-components';

import colors from "../styles/colors";


export default Logo = () => {
    return (
        <Wrapper>
            <Title>Augmented Routes</Title>
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
    margin: 20px 0;
`