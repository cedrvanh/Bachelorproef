import React from 'react';
import styled from 'styled-components';

import { colors, utils, typography } from '~/styles'

import Modal from "~/components/Modal";

export default PurchaseItem = ({ selectedItem, visible, onClose, onBackdropPress, isPurchasable }) => {
    // Format given date in day/month/year
    formatDate = (date) => {
        let d = new Date(date);
        return `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;
    }

    return (
        <Modal
            label={isPurchasable ? "Buy Item" : "Not enough gold"}
            visible={visible}
            onClose={onClose}
            onBackdropPress={onBackdropPress}
            disabled={!isPurchasable}
        >
            <PurchaseModalContent>
                <PurchaseHeader>
                    <Title>{selectedItem.name}</Title>     
                    <Price>{selectedItem.price}</Price>
                </PurchaseHeader>
                <Description>{selectedItem.description}</Description>
                <ExpirationDate>Expires at {formatDate(selectedItem.expiration_date)}</ExpirationDate>
            </PurchaseModalContent>
        </Modal>
    );
}

const PurchaseModalContent = styled.View`
    padding: ${utils.GUTTER} ${utils.GUTTER_SMALL};
`

const PurchaseHeader = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginBottom: ${utils.GUTTER};
`

const Title = styled.Text`
    color: ${colors.WHITE};
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
`

const Description = styled.Text`
    color: ${colors.TEXT_PRIMARY_LIGHT_COLOR};
    fontSize: 14px;
    fontWeight: 600;
`

const Price = styled.Text`
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.WHITE};
`

const ExpirationDate = styled.Text`
    fontSize: 10px;
    color: ${colors.TEXT_PRIMARY_LIGHT_COLOR};
    margin: ${utils.GUTTER} 0;
`