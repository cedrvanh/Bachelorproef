import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { ViroARSceneNavigator, ViroText, ViroConstants } from 'react-viro';

export default CameraScreen = () => {
    var InitialARScene = require('~/js/HelloWorldSceneAR');
    var UNSET = "UNSET";
    var VR_NAVIGATOR_TYPE = "VR";
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

    // <Text>Camera</Text>
    return (
        <ViroARSceneNavigator initialScene={{scene: InitialARScene}} />
    )
}