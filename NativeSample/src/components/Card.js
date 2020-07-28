import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';

export default Card = ({ item }) => {
    return (
        <Wrapper>
            <Title>{ item.title }</Title>
            <Description>
                { item.description }
            </Description>
            <Button label="Begin Quest" small />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    height: 150px;
    borderRadius: ${ utils.BORDER_RADIUS };
    padding: ${ utils.GUTTER } ${ utils.GUTTER_LARGE };
    backgroundColor: ${ colors.WHITE };
    elevation: 1;
`

const Title = styled.Text`
    fontSize: 18px;
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    color: ${ colors.DARK_COLOR };
`
const Description = styled.Text`
    fontSize: 12px;
    marginTop: 8px;
`