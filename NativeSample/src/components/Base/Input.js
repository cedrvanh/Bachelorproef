import React from 'react';
import styled from 'styled-components';

import BaseError from '~/components/Base/Error';

import { colors, utils } from '~/styles';

export default Input = ({ name, placeholder, label, errors, ...props }) => {
    return (
        <React.Fragment>
            {label &&
                <Label>{ label }</Label>
            }
            <StyledInput 
                name={ name }
                placeholder={ placeholder }
                errors={ errors }
                {...props}
            />
            {errors && errors.map((message, index) => (
                <BaseError message={ message } key={ index } />
            ))}
        </React.Fragment>
    )
}

const StyledInput = styled.TextInput.attrs({
    placeholderTextColor: colors.PLACEHOLDER_COLOR
})`
    width: 100%;
    height: 45px;
    marginTop: 16px;
    marginBottom: 4px;
    padding: 8px 24px;
    border: 2px solid ${ colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS_LARGE };
    color: ${ colors.WHITE };
    backgroundColor: ${ colors.PRIMARY_LIGHT_COLOR };
    ${({ errors }) => errors && `
        borderColor: ${ colors.ERROR_COLOR };
    `}
`;

const Label = styled.Text`
    color: ${ colors.WHITE };
    fontWeight: bold;
    textTransform: uppercase;
`