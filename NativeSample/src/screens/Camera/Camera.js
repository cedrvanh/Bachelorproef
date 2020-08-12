import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { ViroARSceneNavigator, ViroText, ViroConstants, ViroScene, Viro360Image } from 'react-viro';

import ARImage from '~/components/AR/ARImage';
import ARVideo from '~/components/AR/ARVideo';
import ARQuestion from '~/components/AR/ARQuestion';
import ARPortal from '~/components/AR/ARPortal';

export default CameraScreen = () => {
    var UNSET = "UNSET";
    var AR_NAVIGATOR_TYPE = "AR";
    
    const [type, setType] = useState(UNSET);
    const [state, setState] = useState({
        text: 'Initializing AR...',
    })

    useEffect(() => {
        setType(AR_NAVIGATOR_TYPE);

        return () => setType(UNSET);
    }, []);

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
            case 'media': 
                return ARImage;
                break;
            case 'video':
                return;
                break;
            case 'question':
                return;
                break;
            default: 
                return;
            
        }
    }

    return (
        <ViroARSceneNavigator initialScene={{scene: ARQuestion}}/>
    )
}