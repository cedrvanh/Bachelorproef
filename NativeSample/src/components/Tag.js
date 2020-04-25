import React from 'react';
import styled from 'styled-components';
import { typography, utils, colors } from '../styles';

export default Tag = ({ active, label, ...attributes }) => {
    return (
        <TagLabel active={ active } {...attributes}>{ label }</TagLabel>
    )
}

const TagLabel = styled.Text`
    flex: 1;
    padding: 5px;
    textAlign: center;
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    backgroundColor: ${props => props.active ? colors.ACCENT_DARK_COLOR : 'transparent' };
    color: ${props => props.active ? colors.WHITE : colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS };
`