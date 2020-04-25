import React from 'react';

import styled from 'styled-components';

import LeaderboardItem from './Item';

export default LeaderboardList = ({ items }) => {
    return (
        <List 
            data={ items }
            renderItem={({ item, index }) => (
                    <LeaderboardItem 
                        item={ item } 
                        key={ item.name } 
                        ranking={ index + 1 }
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