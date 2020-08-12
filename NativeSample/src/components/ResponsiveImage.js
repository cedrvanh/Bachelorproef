import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const window = Dimensions.get('window');
const IMAGE_HEIGHT = Math.round(window.width * 9 / 16);
const IMAGE_WIDTH = window.width;

export default ResponsiveImage = ({ source, resizeMode, margin, ...props }) => {
    return (
        <BaseImageWrapper margin={margin || 0} >
            <BaseImage source={source} resizeMode={resizeMode} {...props} />
        </BaseImageWrapper>
    )
}

const BaseImageWrapper = styled.View`
    justifyContent: center;
    alignItems: center;
    margin: ${props => props.margin}px;
`

const BaseImage = styled.Image`
    width: ${ IMAGE_WIDTH }px;
    height: ${ IMAGE_HEIGHT }px;
`