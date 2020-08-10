import React, { useState, useEffect } from 'react';
import SwipeablePanel from "rn-swipeable-panel";
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import Header from '~/components/Header';
import ItemList from '~/components/Shop/List';

export default InventoryScreen = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [isPanelActive, setIsPanelActive] = useState(false);

    const items = [
        {
            id: 1,
            name: 'Coupon 1',
            expiration_date: '2021-02-28',
            discount: 40
        },
        {
            id: 2,
            name: 'Coupon 2',
            expiration_date: '2020-11-22',
            discount: 75
        },
        {
            id: 3,
            name: 'Coupon 3',
            expiration_date: '2020-09-30',
            discount: 50
        },
    ];

    onItemSelect = (item) => {
        setSelectedItem(item);
        openPanel();
    }

    openPanel = () => {
        console.log('Open');
        setIsPanelActive(true);
    }

    closePanel = () => {
        console.log('Close');
        setIsPanelActive(false);
    }

    return (
        <Container>
            <Header />
            <ItemList 
                items={items}
                onSelect={onItemSelect}
            />
            <SwipeablePanel
                onClose={() => setIsPanelActive(false)}
                isActive={isPanelActive}
                fullWidth={true}
            >
                <Title>{selectedItem.name}</Title>
            </SwipeablePanel>
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 0 ${utils.GUTTER_LARGE};
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const Title = styled.Text`
    color: black;
    fontSize: 20px;
    fontWeight: 900;
`