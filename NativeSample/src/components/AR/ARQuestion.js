import React, { Component } from 'react';
import { ViroARScene, ViroNode, ViroText } from 'react-viro';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default class ARQuestion extends Component {
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
                <ViroNode position={[0, 1, -1]} scale={[2, 2, 2]}>
                    <ViroText text="Text A" position={[0, -.1, -1]}  />
                    <ViroNode position={[1, 0, 0 ]} scale={[4, 4, 4]}>
                        <ViroText text="Text B" />
                    </ViroNode> 
                </ViroNode>
            </ViroARScene>
        )
    }
}