import React, { Component } from 'react';
import { ViroARScene, ViroImage, Viro360Image } from 'react-viro';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default class ARImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uri: '',
            panorama: false,
        }
    }

    render() {
        return (
            <ViroARScene>
                {!this.props.task.panorama ? (
                    <Viro360Image 
                        source={require('~/assets/360_park.jpg')}
                    />
                ) : (
                    <ViroImage
                        position={[0, 0, -4]}
                        scale={[2, 2, 2]}
                        source={{
                            uri: 'https://weekend.knack.be/medias/18289/9364467.jpg'
                        }}
                    />
                )}
            </ViroARScene>
        )
    }
}