import React, { Component } from 'react';
import { ViroARScene, ViroVideo, Viro360Video } from 'react-viro';
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
                    <Viro360Video 
                        source={{ uri: 'https://slaskie.tenkai.pl/mobileapp/chudow_360_FINALNA_1.mp4' }} 
                        loop={true}
                    />
                ) : (
                    <ViroVideo
                        height={2}
                        width={2}
                        position={[0, 0, -2]}
                        source={{
                            uri: 'https://www.youtube.com/watch?v=rHqha40xRL4'
                        }}
                    />
                )}
            </ViroARScene>
        )
    }
}