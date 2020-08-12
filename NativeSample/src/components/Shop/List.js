import React from 'react';
import styled from 'styled-components';

import ShopItem from '~/components/Shop/Item';

export default ShopList = ({ items, onSelect, headerComponent, showTimeDifference, isInventory }) => {
    return (
        <ItemList 
            data={items}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={headerComponent}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
                <ShopItem 
                    item={item} 
                    key={item.id}
                    onItemSelect={onSelect}
                    showTimeDifference={showTimeDifference}
                    isInventory={isInventory}
                />
            )}
        />
    )
}

const ItemList = styled.FlatList``