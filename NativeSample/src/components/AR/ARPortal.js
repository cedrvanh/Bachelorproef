import React, { Component } from 'react';
import {
    ViroSceneNavigator,
    ViroScene,
    ViroARScene,
    ViroAmbientLight,
    Viro360Video,
    Viro360Image,
    ViroUtils,
    ViroPortal,
    ViroPortalScene,
    Viro3DObject,
  } from 'react-viro';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default class ARPortal extends Component {
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
                <ViroAmbientLight color="#ffffff" intensity={200}/>
                    <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
                    <ViroPortal position={[0, 0, -2]} scale={[1, 1, 1]}>
                        <Viro3DObject source={require('~/assets/portal_wood_frame.vrx')}
                        resources={[
                            require('~/assets/portal_wood_frame_diffuse.png'),
                            require('~/assets/portal_wood_frame_normal.png'),
                            require('~/assets/portal_wood_frame_specular.png')
                        ]}
                        type="VRX"/>
                    </ViroPortal>
                    <Viro360Image source={require('~/assets/360_lincoln.jpg')}/>
                </ViroPortalScene>
            </ViroARScene>
        )
    }
}