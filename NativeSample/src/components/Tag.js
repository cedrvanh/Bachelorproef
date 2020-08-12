import React from 'react';
import styled from 'styled-components';

import { typography, utils, colors } from '~/styles';

export default Tag = ({ active, label, ...props }) => {
    return (
        <TagLabel active={active} {...props}>{label}</TagLabel>
    )
}

const TagLabel = styled.Text`
    padding: 5px 40px;
    textAlign: center;
    textTransform: uppercase;
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    backgroundColor: ${props => props.active ? colors.ACCENT_DARK_COLOR : 'transparent' };
    color: ${props => props.active ? colors.WHITE : colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS };
`