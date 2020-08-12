import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import { handleError } from '~/services/api';
import { ShopService as _shopService } from '~/services/ShopService';
import { HeroService as _heroService } from '~/services/HeroService';
import { AuthService as _authService } from '~/services/AuthService';

import Header from '~/components/Header';
import LoadingIndicator from "~/components/LoadingIndicator";
import ShopList from "~/components/Shop/List";
import PurchaseItem from '~/components/Shop/PurchaseItem';

export default ShopScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(1);
    const [characterBalance, setCharacterBalance] = useState({
        uid: 0,
        amount: 0
    });

    // Run user balance on mount
    useEffect(() => {
        getCharacterBalance();
    }, []);

    // Re-run getItems fetch when user balance changes - removes bought item from items array
    useEffect(() => {
        getItems();
    }, [characterBalance.amount]);

    // Fetch user items
    getItems = async () => {
        try {
            const { data } = await _shopService.getItems({
                character: characterBalance.uid
            });
            setItems(data);
        } finally {
            setIsLoading(false);
        }
    }

    // Get character id and balance
    getCharacterBalance = async () => {
        try {
            const { data: user } = await _authService.getAccount();
            setCharacterBalance({
                uid: user.character.id,
                amount: user.character.gold
            });
            getItems();
        } catch (err) {
            handleError(err);
        }
    }

    // Update character balance with new value
    updateCharacterBalance = (newAmount) => {
        setCharacterBalance(prevState => ({
            ...prevState,
            amount: prevState.amount - newAmount
        }));
    }

    onItemSelect = (item) => {
        setSelectedItem(item);
        toggleModal();
    }

    // Add purchaseable item to pivot table
    onItemPurchase = async () => {
        try {
            let id = characterBalance.uid;
            await _shopService.purchaseItem(id, selectedItem.id);

            if(characterBalance.amount >= selectedItem.price) {
                await _heroService.updateCharacter(id, {
                    gold: characterBalance.amount - selectedItem.price
                });
                updateCharacterBalance(selectedItem.price);
            }
        } catch (err) {
            handleError(err)
        } finally {
            toggleModal();
        }
    }

    toggleModal = () => {
        setModalVisibility(!isModalVisible);
    }

    return (
        <Container>
            <Header hideBack />
            {isLoading ? <LoadingIndicator /> : (
                <View style={{ marginBottom: 50 }}>
                    <ShopList 
                        items={items}
                        headerComponent={() => (
                            <Balance>
                                <BalanceHeader>Your Gold</BalanceHeader>
                                <BalanceAmount>{characterBalance.amount}</BalanceAmount>
                            </Balance>
                        )}
                        onSelect={onItemSelect}
                    />

                    <PurchaseItem 
                        visible={isModalVisible}
                        onClose={onItemPurchase}
                        onBackdropPress={toggleModal}
                        selectedItem={selectedItem}
                        isPurchasable={characterBalance.amount >= selectedItem.price}
                    />
                </View>
            )}
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: ${colors.PRIMARY_COLOR};
    padding: ${utils.GUTTER_LARGE};
`

const Balance = styled.View`
    padding: 10px 0 20px 0;
    marginBottom: 20px;
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const BalanceHeader = styled.Text`
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    fontSize: 20px;
    textTransform: uppercase;
    color: ${colors.TEXT_PRIMARY_COLOR};
`

const BalanceAmount = styled.Text`
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.ACCENT_COLOR};
`