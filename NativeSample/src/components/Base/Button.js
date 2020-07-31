import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default Button = ({ label, onPress, disabled, small }) => {
    const RenderButton = small ? SmallButton : DefaultButton;
    
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={ disabled ? 1 : 0.7 }
            onPress={onPress}
        >
            <RenderButton disabled={disabled} >
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
    borderRadius: ${ utils.BORDER_RADIUS_LARGE };
    ${({ disabled }) => disabled && `
        opacity: 0.3;
    `} 
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