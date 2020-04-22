import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

export default UserIcon = () => { 
    return (
        <UserCircle />
    )
}

const UserCircle = styled.View`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 25px;
    height: 25px;
    borderRadius: 50px;
    backgroundColor: ${ colors.DARK_COLOR };
    borderColor: ${ colors.ACCENT_COLOR };
    borderWidth: 3px;
`