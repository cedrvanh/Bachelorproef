import React from 'react';

import styled from 'styled-components';

import LeaderboardItem from './Item';

export default LeaderboardList = ({ items, selectedTag }) => {
    return (
        <List 
            data={items}
            renderItem={({ item, index }) => (
                    <LeaderboardItem 
                        user={item} 
                        key={item.id} 
                        ranking={index + 1}
                        selectedTag={selectedTag}
                    />
            )}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
        />
    )
}

const List = styled.FlatList`
    flex: 1;
`