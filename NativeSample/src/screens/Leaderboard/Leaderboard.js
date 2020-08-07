import React, { useState } from 'react';

import styled from 'styled-components';

import { colors, utils, typography } from '../../styles';

import Header from '../../components/Header';
import LeaderboardList from '../../components/Leaderboard/List';
import Tag from '../../components/Tag';

export default LeaderBoard = ({ navigation }) => {
    const [tags, setTags] = useState(["Weekly", "Monthly", "All Time"]);

    const items = [
        {
            name: 'Ser Podrick',
            highscore: 15
        },
        {
            name: 'Lara Jones',
            highscore: 12
        },
        {
            name: 'John Doe',
            highscore: 10
        },
        {
            name: 'Peter Finkle',
            highscore: 8
        },
        {
            name: 'Tor Men',
            highscore: 7
        },
        {
            name: 'Joe Mama',
            highscore: 5
        },
        {
            name: 'Clue Ball',
            highscore: 2
        },
    ]

    selectedTag = (index) => {
        const selectedItem = tags[index];
        console.log(selectedItem);
    }

    renderTags = () => {
        return tags.map((tag, index) => {
            return ( 
                <Tag 
                    label={ tag }
                    key={ tag }
                    active={ index == 0 }
                    onPress={() => selectedTag(index)}
                />
            )
        })
    }

    return (
        <Container>
            <Header />
            <Tags>{ renderTags() }</Tags>
            <LeaderboardList items={ items } />
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 0 ${ utils.GUTTER_LARGE };
    backgroundColor: ${ colors.PRIMARY_COLOR };
`

const Tags = styled.View`
    display: flex;
    margin: 10px 0 40px 0;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`