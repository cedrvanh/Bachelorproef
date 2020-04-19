import React from 'react';

import styled from 'styled-components';

export default Error = ({ message }) => {
    return (
        <Message>
            { message }
        </Message>
    )
}

const Message = styled.Text`
    color: red;
`
