import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import { HeroService as _heroService } from '~/services/HeroService';

import Header from '~/components/Header';
import LoadingIndicator from "~/components/LoadingIndicator";
import LeaderboardList from '~/components/Leaderboard/List';
import Tag from '~/components/Tag';

export default LeaderBoardScreen = ({ navigation }) => {
    const [leaderboardData, setLeaderboardData] = useState({});
    const [tags, setTags] = useState(["score", "gold"]);
    const [selectedTag, setSelectedTag] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('score');

    useEffect(() => {
        setIsLoading(true);
        getLeaderboard();
    }, [query]);

    onSelectedTag = (index) => {
        setSelectedTag(index);
        setQuery(tags[index]);
    }

    getLeaderboard = async () => {
        try {
            const { data } = await _heroService.getCharacters({ sort: query });
            setLeaderboardData(data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    renderTags = () => {
        return tags.map((tag, index) => {
            return ( 
                <Tag 
                    label={tag}
                    key={tag}
                    active={index === selectedTag}
                    onPress={() => onSelectedTag(index)}
                />
            )
        })
    }

    return (
        <Container>
            <Header onBack={() => navigation.navigate('Home')} />
            <Tags>{renderTags()}</Tags>
            {isLoading ? <LoadingIndicator /> : (
                <LeaderboardList 
                    items={leaderboardData}
                    selectedTag={selectedTag}
                />            
            )}
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 0 ${utils.GUTTER_LARGE};
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const Tags = styled.View`
    margin: 10px 0 40px 0;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`