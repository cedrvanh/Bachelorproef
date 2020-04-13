import React from 'react';
import styled from 'styled-components';

import colors from '../styles/colors';

export default Input = ({ name, placeholder, ...props }) => {
    return (
        <StyledInput 
            name={ name }
            placeholder={ placeholder }
            {...props}
        />
    )
}

const StyledInput = styled.TextInput.attrs({
    placeholderTextColor: colors.PLACEHOLDER_COLOR
})`
    width: 100%;
    height: 45px;
    marginTop: 16px;
    padding: 8px 16px;
    color: ${ colors.TEXT_COLOR };
    backgroundColor: ${ colors.GREY_COLOR };
`;