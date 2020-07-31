import React from 'react';

import styled from 'styled-components';

export default BaseError = ({ message }) => {
    return (
        <ErrorMessage>
            { message }
        </ErrorMessage>
    )
}

const ErrorMessage = styled.Text`
    color: red;
`
