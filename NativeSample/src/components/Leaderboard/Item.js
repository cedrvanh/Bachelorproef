import React, { useState } from 'react';

import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import Ranking from '~/components/Leaderboard/Ranking';

export default LeaderboardItem = ({ user, ranking, selectedTag}) => {
    renderRanking = () => {
        if (selectedTag) {
            return `Total gold: ${user.gold}`
        } else {
            return `Total score: ${user.score}`
        }
    }

    return (
        <Wrapper>
            <Ranking position={ranking} />
            <LeaderboardUser>
                <UserInfo>
                    <Name>{user.name}</Name>
                    <Class>{user.class.name} - {renderRanking()}</Class>
                </UserInfo>
            </LeaderboardUser>
        </Wrapper>
    );
}

const Wrapper = styled.View`
    alignItems: center;
    flexDirection: row;
    marginBottom: ${utils.GUTTER};
`

const LeaderboardUser = styled.View`
    flexDirection: row;
    flex: 2;
    padding: ${utils.GUTTER}; 
    borderRadius: ${utils.BORDER_RADIUS_SMALL};
    backgroundColor: ${colors.PRIMARY_LIGHT_COLOR};
`

const UserInfo = styled.View`
    flex: 1;
    marginLeft: ${utils.GUTTER};
`

const Name = styled.Text`
    color: ${colors.WHITE };
    fontSize: ${typography.FONT_SIZE_DEFAULT};
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
`

const Class = styled.Text`
    color: ${colors.WHITE};
    fontSize: 12px;
`

const ProfileCircle = styled.View`
    width: 40px;
    height: 40px;
    backgroundColor: ${colors.DARK_COLOR};
    borderColor: ${colors.ACCENT_COLOR};
    borderWidth: 3px;
    borderRadius: 50px;
`