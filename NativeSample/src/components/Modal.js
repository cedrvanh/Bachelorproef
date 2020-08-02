import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-native-modal';

import { colors, typography, utils } from '~/styles';

import Button from '~/components/Base/Button';

export default CustomModal = ({ title, onClose, children }) => {
    const [isModalVisible, setModalVisible] = useState(true);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    const renderContent = () => {
        // If children present, render those
        if (children) return children;
        
        // Default modal content
        return (
            <ModalText>
                {title || 'Custom Modal'}
            </ModalText>
        )
    }

    return (
        <Modal 
            isVisible={isModalVisible}
            backdropColor={ colors.PRIMARY_COLOR }
            backdropOpacity={0.7}
            onModalHide={toggleModal}
        >
            <ModalContent>
                {renderContent()}
                <Button label="Grant permission" onPress={onClose} />
            </ModalContent>
        </Modal>
    )
}

const ModalContent = styled.View`
    padding: ${ utils.GUTTER_LARGE };
    borderRadius: ${ utils.BORDER_RADIUS_LARGE };
    backgroundColor: ${ colors.PRIMARY_COLOR };
`

const ModalText = styled.Text`
    margin: ${ utils.GUTTER_LARGE } 0;
    color: ${ colors.WHITE };
    fontSize: ${ typography.FONT_SIZE_DEFAULT };
    textAlign: center;
`
