import React from 'react';
import styled from 'styled-components';
import Modal from 'react-native-modal';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';

export default CustomModal = ({ title, onClose, visible, label, onBackdropPress, children }) => {
    renderContent = () => {
        // If children present, render those
        if (children) return children;
        
        // Default modal content
        return (
            <ModalText>
                {title || 'Custom Modal'}
            </ModalText>
        )
    }

    _onPress = () => {
        if (onClose) onClose()
    }

    return (
        <Modal 
            isVisible={visible}
            backdropColor={colors.PRIMARY_COLOR}
            backdropOpacity={0.7}
            onBackdropPress={onBackdropPress}
        >
            <ModalContent>
                {renderContent()}
                <Button label={label || 'Grant Permission'} onPress={_onPress} />
            </ModalContent>
        </Modal>
    )
}

const ModalContent = styled.View`
    padding: ${utils.GUTTER_LARGE};
    borderRadius: ${utils.BORDER_RADIUS_LARGE};
    backgroundColor: ${colors.PRIMARY_COLOR};
`

const ModalText = styled.Text`
    margin: ${utils.GUTTER_LARGE} 0;
    color: ${colors.WHITE};
    fontSize: ${typography.FONT_SIZE_DEFAULT};
    textAlign: center;
`
