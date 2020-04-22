import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { colors, utils } from '../styles';

export default Button = ({ label, onPress, disabled = false, small }) => {
    const RenderButton = small ? SmallButton : DefaultButton;
    
    return (
        <TouchableOpacity
            activeOpacity={ disabled ? 1 : 0.7 }
            onPress={onPress}
        >
            <RenderButton>
                <Label>{ label.toUpperCase() }</Label>
            </RenderButton>
        </TouchableOpacity>
    )
}


const DefaultButton = styled.View`
    justifyContent: center;
    alignItems: center;
    height: 45px;
    padding: 8px 16px;
    marginTop: 24px;
    backgroundColor: ${ colors.ACCENT_COLOR };
`

const SmallButton = styled(DefaultButton)`
    alignSelf: flex-start;
    height: 28px;
    borderRadius: ${ utils.BORDER_RADIUS };
`

const Label = styled.Text`
    color: ${ colors.WHITE }
    fontWeight: bold;
`