import React, { Component } from 'react';
import { ViroARScene, ViroImage, Viro360Image } from 'react-viro';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default class ARVideo extends Component {
    constructor() {
        super();

        this.state = {
            uri: '',
            panorama: false,
        }
    }

    render() {
        return (
            <ViroARScene>
                {this.state.panorama ? (
                    <Viro360Image 
                        source={require('~/assets/360_park.jpg')}
                    />
                ) : (
                    <ViroImage 
                        source={{
                            uri: 'https://weekend.knack.be/medias/18289/9364467.jpg'
                        }}
                    />
                )}
            </ViroARScene>
        )
    }
}