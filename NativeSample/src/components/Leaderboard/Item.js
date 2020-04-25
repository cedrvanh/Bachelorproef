import React, { useState } from 'react';

import styled from 'styled-components';

import { colors, typography, utils } from '../../styles';
import Ranking from './Ranking';

export default LeaderboardItem = ({ item, ranking }) => {
    return (
        <Wrapper>
            <Ranking position={ ranking } />
            <User>
                <UserName>{ item.name }</UserName>
                <UserName>Knight</UserName>
            </User>
        </Wrapper>
    );
}

const Wrapper = styled.View`
    flex: 1;
    alignItems: center;
    flexDirection: row;
    marginBottom: ${ utils.GUTTER };
`

const User = styled.View`
    flex: 2;
    padding: ${ utils.GUTTER }; 
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
    backgroundColor: ${ colors.PRIMARY_LIGHT_COLOR };
`

const UserName = styled.Text`
    color: ${ colors.WHITE };
    fontSize: ${ typography.FONT_SIZE_DEFAULT };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
`