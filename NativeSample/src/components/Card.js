import React from 'react';
import styled from 'styled-components';

import { getPathLength } from 'geolib';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';
import Icon from '~/components/Base/Icon';

import { truncateString } from '~/helpers';

export default Card = ({ item, onRouteStart }) => {
    calculateDistance = ({ tasks }) => {
        let coords = tasks.map(({location}) => location.coords);
        let m = getPathLength(coords);
        let distance = m / 1000;
        return `${distance.toFixed(1)} km`;
    }

    return (
        <CardContainer>
            <CardMeta>
                <Icon name="ios-pin" color={colors.DARK_COLOR} />
                <Distance>{calculateDistance(item)}</Distance>
            </CardMeta>
            <Title>{item.name}</Title>
            <Description>
                {truncateString(item.description, 80)}
            </Description>
            <Button 
                onPress={() => onRouteStart(item)}
                label="Begin Quest" 
                small 
            />
        </CardContainer>
    )
}

const CardContainer = styled.View`
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

const CardMeta = styled.View`
    flex: 1;
    alignItems: center;
    flexDirection: row;
`

const Distance = styled.Text`
    fontSize: 10px;
    marginLeft: 6px;
`