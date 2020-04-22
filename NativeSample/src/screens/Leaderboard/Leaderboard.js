import React, { useState } from 'react';

import styled from 'styled-components';

import { colors, utils } from '../../styles';

import Header from '../../components/Header';
import LeaderboardList from '../../components/Leaderboard/List';

export default LeaderBoard = ({ navigation }) => {
    const items = [
        {
            name: 'Ser Podrick',
            highscore: 15
        },
        {
            name: 'Lara Jones',
            highscore: 8
        },
        {
            name: 'John Doe',
            highscore: 7
        },
        {
            name: 'Peter Finkle',
            highscore: 3
        },
    ]

    return (
        <Container>
            <Header title={ navigation.state.routeName } />
            <LeaderboardList items={ items } />
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: ${ utils.GUTTER_LARGE };
    backgroundColor: ${ colors.PRIMARY_COLOR };
`