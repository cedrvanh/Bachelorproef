import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import ModelView from 'react-native-gl-model-view';
import styled from 'styled-components';

import Icon from '~/components/Base/Icon';

import { colors } from '~/styles';

// Use React Animated API
const AnimatedModelView = Animated.createAnimatedComponent(ModelView);

export default InteractiveModel = ({ model }) => {
    const [coords, setCoords] = useState({
        rotateX: new Animated.Value(-90),
        rotateZ: new Animated.Value(0),
        fromXY: undefined,
        valueXY: undefined,
    })

    useEffect(() => {
        // TOOD 
    }, [model])

    // Reset state when finished moving
    onMoveEnd = () => {
        setCoords(prevState => ({
            ...prevState,
            fromXY: undefined
        }));
    }

    // Animate 3D model when dragging / rotating
    onMove = (e) => {
        let { pageX, pageY } = e.nativeEvent;

        if (!coords.fromXY) {
            setCoords(prevState => ({
                ...prevState,
                fromXY: [pageX, pageY],
                valueXY: [coords.rotateZ.__getValue(), coords.rotateX.__getValue()],
            }));
        } else {
            coords.rotateZ.setValue(coords.valueXY[0] + (pageX - coords.fromXY[0]) / 2);
            coords.rotateX.setValue(coords.valueXY[1] + (pageY - coords.fromXY[1]) / 2);
        }
    }
    
    loadModel = () => {
        const { name } = model;
        return `${name.toLowerCase()}`;
    }

    return (
        <AnimatedModel
            model={{
                uri: `${loadModel()}.obj`
            }}
            texture={{
                uri: `${loadModel()}.png`
            }}
            onStartShouldSetResponder={() => true}
            onResponderRelease={onMoveEnd}
            onResponderMove={onMove}
            animate={!!coords.fromXY}
            tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
            scale={1.1}
            rotateX={coords.rotateX}
            rotateZ={coords.rotateZ}
            translateZ={-3}
        />
    )
}

const AnimatedModel = styled(AnimatedModelView)`
    flex: 1;
`