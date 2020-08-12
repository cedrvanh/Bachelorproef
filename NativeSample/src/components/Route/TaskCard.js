import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import { RouteService as _routeService } from '~/services/RouteService';

import Icon from '~/components/Base/Icon';
import Button from '~/components/Base/Button';
import Modal from '~/components/Modal';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 32;
const CARD_HEIGHT = 100;

export default TaskCard = ({ route, currentTask, onRouteCancel, nearLocation, openCamera }) => {
    const [isModalVisible, setIsModalVisibility] = useState(false);

    _onRouteCancelModal = () => {
        setIsModalVisibility(true);
    }

    return (
        <React.Fragment>
            {route.tasks && (
                <TaskContainer>
                    <CloseButton name={'ios-close'} size={36} color={colors.DARK_COLOR} onPress={() => _onRouteCancelModal()} />
                    <SubHeader>{currentTask + 1}/{route.tasks.length}</SubHeader>
                    <TouchableWithoutFeedback onPress={() => openCamera()}>
                        <Title>{route.tasks[currentTask].name}</Title>
                    </TouchableWithoutFeedback>
                    <Description>{route.tasks[currentTask].description}</Description>
                    <OpenCameraText>{nearLocation ? 'Open Camera' : 'Go to location'}</OpenCameraText>
                </TaskContainer>

            )}
            
            <Modal
                label={"Cancel Route"}
                visible={isModalVisible}
                onClose={() => onRouteCancel()}
            >
                <RouteModalContent>
                    <ModalText>Are you sure you want to cancel your current route? You haven't finished yet!</ModalText>
                </RouteModalContent>
            </Modal>
        </React.Fragment>
    )
}

const TaskContainer = styled.View`
    width: ${CARD_WIDTH}px;
    minHeight: ${CARD_HEIGHT}px;
    maxHeight ${CARD_HEIGHT + 100}px;
    alignSelf: center;
    padding: ${utils.GUTTER_LARGE};
    borderRadius: ${utils.BORDER_RADIUS};
    backgroundColor: ${colors.WHITE};
`

const Title = styled.Text`
    color: ${colors.DARK_COLOR};
    fontSize: 20px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    textTransform: uppercase;
`

const Description = styled.Text`
    fontSize: 12px;
`

const SubHeader = styled.Text`
    fontSize: 10px;
`

const CloseButton = styled(Icon)`
    position: absolute;
    top: ${utils.GUTTER};
    right: ${utils.GUTTER_LARGE};
    elevation: 2;
`

const RouteModalContent = styled.View`
    padding: ${utils.GUTTER} ${utils.GUTTER_SMALL};
`

const ModalText = styled.Text`
    fontSize: ${typography.FONT_SIZE_DEFAULT};
    color: ${colors.PLACEHOLDER_COLOR};
`

const OpenCameraText = styled.Text`
    marginTop: ${utils.GUTTER};
    color: ${colors.ACCENT_COLOR};
    fontSize:${typography.FONT_SIZE_DEFAULT};
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    textTransform: uppercase;
`