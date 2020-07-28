import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

export default SelectedCard = ({ data, selected, onPress, column }) => {
    return (
        <Card 
            onPress={onPress} 
            selected={selected}
            column={column || 2}
        >
            <CardContent>{data}</CardContent>
        </Card>
    )
}

const Card = styled.TouchableOpacity`
    width: ${props => 96 / props.column }%;
    min-height: 75px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${ props => props.selected ? colors.ACCENT_COLOR : colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
`

const CardContent = styled.Text`
    color: ${ colors.PLACEHOLDER_COLOR };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    fontSize: 16px;
    textTransform: uppercase;
`