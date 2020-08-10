import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

export default ShopItem = ({ item, onItemSelect }) => {

    // Format given date in day/month/year
    formatDate = (date) => {
        let d = new Date(date);
        return `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`;
    }

    return (
        <ItemCard onPress={() => onItemSelect(item)}>
            <View style={{ flex: 1.5 }}>
                <ItemDate>{formatDate(item.expiration_date)}</ItemDate>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>Coupon - Discount for -{item.discount}%</ItemDescription>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                <ItemPrice>{item.price}</ItemPrice>
            </View>
        </ItemCard>
    );
}

const ItemCard = styled.TouchableOpacity`
    flexDirection: row;
    min-height: 75px;
    backgroundColor: ${colors.PRIMARY_LIGHT_COLOR};
    borderRadius: ${utils.BORDER_RADIUS_SMALL};
    padding: ${utils.GUTTER} ${utils.GUTTER_LARGE};
    marginBottom: ${utils.GUTTER};
`

const ItemDate = styled.Text`
    fontSize: 12px;
    fontWeight: 600;
    color: ${colors.TEXT_PRIMARY_LIGHT_COLOR};
    marginBottom: 3px;
`

const ItemTitle = styled.Text`
    fontSize: 18px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.WHITE};
`

const ItemDescription = styled.Text`
    fontSize: 14px;
    fontWeight: 600;
    color: ${colors.PLACEHOLDER_COLOR};
`

const ItemPrice = styled.Text`
    fontSize: 18px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.ACCENT_COLOR};
`