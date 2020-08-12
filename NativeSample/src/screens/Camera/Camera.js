import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { ViroARSceneNavigator, ViroConstants } from 'react-viro';

import { utils, colors, typography } from '~/styles';

import { HeroService as _heroService } from '~/services/HeroService';
import { RouteService as _routeService } from '~/services/RouteService';
import { AuthService as _authService } from '~/services';
import { handleError } from '~/services/api';

import ARQuestion from '~/components/AR/ARQuestion';
import ARImage from '~/components/AR/ARImage';
import ARVideo from '~/components/AR/ARVideo';
import ARPortal from '~/components/AR/ARPortal';

import Button from '~/components/Base/Button';
import Modal from '~/components/Modal';
import LoadingIndicator from '~/components/LoadingIndicator';

export default CameraScreen = ({ navigation }) => {
    var UNSET = "UNSET";
    var AR_NAVIGATOR_TYPE = "AR";
    
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [task, setTask] = useState(navigation.getParam('task', null));
    const [user, setUser] = useState({});
    const [type, setType] = useState(UNSET);
    const [taskScene, setTaskScene] = useState(null);
    const [state, setState] = useState({
        text: 'Initializing AR...',
    })

    useEffect(() => {
        setType(AR_NAVIGATOR_TYPE);
        getUserData();
        return () => setType(UNSET);
    }, [task]);

    _onInitialized = (state, reason) => {
        console.log(state)

        if (state == ViroConstants.TRACKING_NORMAL) {
            console.log('Tracking')
            setState({
                text: 'Hello World'
            });
        } else if (state == ViroConstants.TRACKING_REASON_NONE) {
            console.log('Loss of tracking')
        }
    }

    getSceneByType = (type) => {
        switch(type) {
            case 1: // Video
                return <ViroARSceneNavigator initialScene={{
                    scene: ARVideo,
                    passProps: {
                        task: task
                    }
                }} />
                break;
            case 2: // Image
                return <ViroARSceneNavigator initialScene={{
                    scene: ARImage,
                    passProps: {
                        task: task
                    }
                }} />
                break;
            case 3: // Portal
                return <ViroARSceneNavigator initialScene={{
                    scene: ARPortal,
                    passProps: {
                        task: task
                    }
                }} />
                break;
            default: 
                return; 
        }
    }

    getUserData = async () => {
        try {
            const { data } = await _authService.getAccount();
            setUser(data);
            setIsLoading(false);
        } catch (err) {
            handleError(err);
        }
    }

    onCompleteTask = async () => {
        setIsModalVisible(true);

        try {
            await _heroService.updateCharacter(user.character.id, {
                gold: user.character.gold + task.reward,
                score: user.character.score + task.score
            });
        } catch (err) {
            handleError(err);
        }
    }

    onFinishTask = async () => {
        let oldRoute = navigation.getParam('onRoute', null);
        let newRoute = {
            status: oldRoute.status,
            currentRoute: oldRoute.currentRoute,
            currentIndex: oldRoute.currentIndex + 1
        };
    
        await _routeService.saveRoute(newRoute);
        navigation.navigate('Home');
    }

    if (isLoading) {
        return <LoadingIndicator />
    }

    return (
        <View style={{ flex: 1 }}>
            {getSceneByType(task.type.id)}
            <OverlayContainer>
                <Button 
                    label={"Complete Task"} 
                    onPress={() => onCompleteTask()}
                />
            </OverlayContainer>
            <Modal
                label={"Go to next task"}
                visible={isModalVisible}
                onClose={() => onFinishTask()}
            >
                <TaskModalContent>
                    <ModalText>Congratulations! You have earned:</ModalText>
                    <RewardText>{task.reward} gold</RewardText>
                    <RewardText>{task.score} score</RewardText>
                </TaskModalContent>
            </Modal>
        </View>
    )
}

const OverlayContainer = styled.View`
    position: absolute;
    left: 0;
    bottom: 0;
    elevation: 1;
    width: 100%;
    padding: ${utils.GUTTER_LARGE};
`

const TaskModalContent = styled.View`
    padding: ${utils.GUTTER} ${utils.GUTTER_SMALL};
`

const ModalText = styled.Text`
    fontSize: ${typography.FONT_SIZE_DEFAULT};
    color: ${colors.PLACEHOLDER_COLOR};
`

const RewardText = styled.Text`
    fontSize: ${typography.FONT_SIZE_DEFAULT};
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
    color: ${colors.ACCENT_COLOR};
`