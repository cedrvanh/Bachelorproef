import React from 'react';
import styled from 'styled-components';

import { colors, utils } from '~/styles';

export default Input = ({ name, placeholder, label, ...props }) => {
    return (
        <React.Fragment>
            {label &&
                <Label>{ label }</Label>
            }
            <StyledInput 
                name={ name }
                placeholder={ placeholder }
                {...props}
            />
        </React.Fragment>
    )
}

const StyledInput = styled.TextInput.attrs({
    placeholderTextColor: colors.PLACEHOLDER_COLOR
})`
    width: 100%;
    height: 45px;
    marginTop: 16px;
    padding: 8px 24px;
    borderRadius: ${ utils.BORDER_RADIUS_LARGE };
    color: ${ colors.WHITE };
    backgroundColor: ${ colors.PRIMARY_LIGHT_COLOR };
`;

const Label = styled.Text`
    color: ${ colors.WHITE };
    fontWeight: bold;
    textTransform: uppercase;
`