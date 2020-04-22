import React from 'react';

import styled from 'styled-components';

import LeaderboardItem from './Item';

export default LeaderboardList = ({ items }) => {
    return (
        // <List>
        //     {items && items.map(item => {
        //         return <LeaderboardItem item={ item } key={ item.name } />
        //     })}
        // </List>
        <Wrapper>
            <List 
                data={ items }
                renderItem={({ item }) => <LeaderboardItem item={ item } />}
                keyExtractor={item => item.name}
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
`

const List = styled.FlatList`
    backgroundColor: red;
`