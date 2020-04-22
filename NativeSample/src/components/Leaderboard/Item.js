import React, { useState } from 'react';

import styled from 'styled-components';
import { colors, typography, utils } from '../../styles';

export default LeaderboardItem = ({ item }) => {
    return (
        <Wrapper>
            <Ranking>
                <RankingPosition>{ item.highscore }</RankingPosition>
            </Ranking>
            <User>
                <UserName>{ item.name }</UserName>
                <UserName>Knight</UserName>
            </User>
        </Wrapper>
    );
}

const Wrapper = styled.View`
    flex: 1;
    height: 50px;
    alignItems: center;
    flexDirection: row;
`

const Ranking = styled.View`
    flex: 0.5;
`

const User = styled.View`
    flex: 2;
    padding: ${ utils.GUTTER }; 
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
    backgroundColor: #212130;
`

const UserName = styled.Text`
    color: ${ colors.WHITE };
    fontSize: ${ typography.FONT_SIZE_DEFAULT };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
`

const RankingPosition = styled.Text`
    color: #212130;
    fontSize: ${ typography.FONT_SIZE_HEADING };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
`