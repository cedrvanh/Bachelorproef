import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles';

import { ShopService as _shopService } from '~/services/ShopService';
import { HeroService as _heroService } from '~/services/HeroService';
import { AuthService as _authService } from '~/services/AuthService';

import Header from '~/components/Header';
import LoadingIndicator from "~/components/LoadingIndicator";
import ShopList from "~/components/Shop/List";
import Modal from "~/components/Modal";

export default ShopScreen = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const [characterBalance, setCharacterBalance] = useState(0);
    const [selectedItem, setSelectedItem] = useState(1);
    const [isModalVisible, setModalVisibility] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItems();
        getCharacterBalance();
    }, []);

    getItems = async () => {
        try {
            const { data } = await _shopService.getItems();
            setItems(prevItems => [
                ...prevItems, 
                ...data
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    getCharacterBalance = async () => {
        try {
            const data = await _authService.getAccount();
            console.log(data.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    onItemSelect = (item) => {
        setSelectedItem(item);
        toggleModal()
    }

    onItemPurchase = () => {
        toggleModal()
        console.log('Item purchased')
    }
    
    toggleModal = () => {
        setModalVisibility(!isModalVisible);
    }

    return (
        <Container>
            <Header />
            {isLoading ? <LoadingIndicator /> : (
                <View style={{ marginBottom: 75 }}>
                    <ShopList 
                        items={items}
                        headerComponent={() => (
                            <Balance>
                                <BalanceHeader>Your Balance</BalanceHeader>
                                <BalanceAmount>{characterBalance}</BalanceAmount>
                            </Balance>
                        )}
                        onSelect={onItemSelect}
                    />

                <Modal
                    label="Purchase Item"
                    title={selectedItem.name}
                    visible={isModalVisible}
                    onClose={onItemPurchase}
                    onBackdropPress={toggleModal}
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

const ItemContainer = styled.ScrollView.attrs({
    contentContainerStyle:  {
        flexGrow: 1,
        flexDirection: 'row',
    }
})`
`
const ModalContent = styled.View`
    padding: ${ utils.GUTTER_LARGE };
    borderRadius: ${ utils.BORDER_RADIUS_LARGE };
    backgroundColor: ${ colors.PRIMARY_COLOR };
`

const Balance = styled.View`
    padding: 10px 0 20px 0;
    marginBottom: 20px;
    textAlign: center;
    justifyContent: center;
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const BalanceHeader = styled.Text`
    textAlign: center;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    fontSize: 20px;
    textTransform: uppercase;
    color: ${colors.TEXT_PRIMARY_COLOR};
`

const BalanceAmount = styled.Text`
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    textAlign: center;
    color: ${colors.ACCENT_COLOR};
`