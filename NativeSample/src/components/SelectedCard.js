import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

export default SelectedCard = ({ value, selected, onPress, children, column }) => {
    // Render if there are children (i.e. custom component) available, else render default Card text
    const renderContent = children ? children : <CardContent>{value}</CardContent>;

    return (
        <Card 
            onPress={onPress} 
            selected={selected}
            column={column || 2}
        >
            {renderContent}
        </Card>
    )
}

const Card = styled.TouchableOpacity`
    width: ${props => 96 / props.column }%;
    marginTop: 8px;
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