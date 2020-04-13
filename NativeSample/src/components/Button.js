import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import colors from '../styles/colors';

export default Button = ({ label, onPress, disabled = false }) => {
    return (
        <TouchableOpacity
            activeOpacity={ disabled ? 1 : 0.7 }
            onPress={onPress}
        >
            <StyledButton>
                <Label>{ label.toUpperCase() }</Label>
            </StyledButton>
        </TouchableOpacity>
    )
}

const StyledButton = styled.View`
    justifyContent: center;
    alignItems: center;
    height: 45px;
    padding: 8px 16px;
    marginTop: 24px;
    backgroundColor: ${ colors.PRIMARY_COLOR }
`

const Label = styled.Text`
    color: ${ colors.TEXT_COLOR }
    fontWeight: bold;
`