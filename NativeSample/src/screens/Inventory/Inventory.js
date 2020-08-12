import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import SwipeablePanel from "rn-swipeable-panel";
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import { handleError } from '~/services/api';
import { HeroService as _heroService } from '~/services/HeroService';

import Header from '~/components/Header';
import ItemList from '~/components/Shop/List';
import LoadingIndicator from '~/components/LoadingIndicator';
import ResponsiveImage from '~/components/ResponsiveImage';

const BARCODE_URI = 'https://pngimg.com/uploads/barcode/barcode_PNG34.png';

export default InventoryScreen = ({ navigation }) => {
    const [uid, setUid] = useState(navigation.getParam('uid', 0));
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [isPanelActive, setIsPanelActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCharacterItems();
    }, [uid]);

    getCharacterItems = async () => {
        try {
            const { data } = await _heroService.getInventory(uid);
            setItems(data);
        } catch (err) {
            handleError(err);
        } finally {
            setIsLoading(false);
        }
    }

    onItemSelect = (item) => {
        setSelectedItem(item);
        openPanel();
    }

    openPanel = () => {
        setIsPanelActive(true);
    }

    return (
        <Container>
            <Header />
            {isLoading ? <LoadingIndicator /> : (
                <React.Fragment>
                    {items.length ? (
                        <React.Fragment>
                            <InventoryContainer>
                                <ItemList 
                                    items={items}
                                    onSelect={onItemSelect}
                                    isInventory
                                />
                            </InventoryContainer>
                            <SwipeablePanel
                                onClose={() => setIsPanelActive(false)}
                                isActive={isPanelActive}
                                fullWidth={true}
                            >
                                <PanelContent>
                                    <ResponsiveImage source={{ uri: BARCODE_URI }} />
                                    <Title>{selectedItem.name}</Title>
                                    <SubTitle>Coupon - Discount for -{selectedItem.discount}%</SubTitle>
                                    <Description>{selectedItem.description}</Description>
                                </PanelContent>
                            </SwipeablePanel>
                        </React.Fragment>
                    ) : (
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: colors.TEXT_PRIMARY_LIGHT_COLOR }}>You haven't bought any items yet!</Text>
                        </View>
                    )}
                </React.Fragment>
            )}
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    padding: 0 ${utils.GUTTER_LARGE};
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const InventoryContainer = styled.View`
    flex: 1;
    marginTop: ${utils.GUTTER};
`

const PanelContent = styled.ScrollView`
    flex: 1;
    padding: ${utils.GUTTER_LARGE};
`

const Title = styled.Text`
    color: ${colors.DARK_COLOR};
    fontSize: ${typography.FONT_SIZE_HEADING};
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    marginTop: ${utils.GUTTER};
`

const SubTitle = styled.Text`
    color: ${colors.PRIMARY_LIGHT_COLOR};
    fontSize: 16px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    marginBottom: ${utils.GUTTER};
`

const Description = styled.Text`
    color: ${colors.PRIMARY_LIGHT_COLOR};
    fontSize: ${typography.FONT_SIZE_DEFAULT};
`