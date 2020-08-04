import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';

import { truncateString } from '~/helpers';

export default Card = ({ item }) => {
    return (
        <CardContainer>
            <Title>{ item.title }</Title>
            <Description>
                {truncateString(item.description, 80)}
            </Description>
            <Button label="Begin Quest" small />
        </CardContainer>
    )
}

const CardContainer = styled.View`
    height: 150px;
    borderRadius: ${utils.BORDER_RADIUS};
    padding: ${utils.GUTTER} ${utils.GUTTER_LARGE};
    backgroundColor: ${colors.WHITE};
    elevation: 1;
`

const Title = styled.Text`
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.DARK_COLOR};
`
const Description = styled.Text`
    fontSize: 12px;
    marginTop: 8px;
`