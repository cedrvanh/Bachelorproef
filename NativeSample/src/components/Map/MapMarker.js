import React from 'react';
import { View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

import Icon from '~/components/Base/Icon';

const MapMarker = ({ label, coordinate }) => {
    return (
        <Marker.Animated
            title={label}
            tracksViewChanges={false}
            string={label}
            coordinate={coordinate}
        >
            <Icon name={"ios-pin"} size={42}/>

            <Callout tooltip>
                <View>
                    <CalloutBubble>
                        <Label>{label}</Label>
                    </CalloutBubble>
                    <CalloutArrow />
                </View>
            </Callout>
        </Marker.Animated>
    )
}

export default MapMarker;

const CalloutBubble = styled.View`
    width: 150px;
    padding: 10px;
    borderRadius: ${ utils.BORDER_RADIUS };
    backgroundColor: ${ colors.WHITE };
`

const Label = styled.Text`
    color: ${ colors.DARK_COLOR };
    textAlign: center;
    fontSize: 16px;
    fontWeight: 900;
`

const CalloutArrow = styled.View`
    width: 0px;
    height: 0px;
    marginTop: -3px;
    alignSelf: center;
    backgroundColor: transparent;
    borderStyle: solid;
    borderLeftWidth: 5px;
    borderRightWidth: 5px;
    borderBottomWidth: 10px;
    borderLeftColor: transparent;
    borderRightColor: transparent;
    borderBottomColor: ${ colors.WHITE };
    transform: rotate(180deg);
`