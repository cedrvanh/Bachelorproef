import React from 'react';
import styled from 'styled-components';

import { colors, typography, utils } from '~/styles';

export default SelectedCard = ({ data, selected, onPress }) => {
    return (
        <Card onPress={onPress}>
            <CardContent>{data}</CardContent>
        </Card>
    )
}

const Card = styled.TouchableOpacity`
    flex: 1;
    height: 125px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${ props => props.selected ? colors.ACCENT_COLOR : colors.PRIMARY_LIGHT_COLOR };
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
`

const CardContent = styled.Text`
    color: ${ colors.PRIMARY_COLOR };
    fontWeight: bold;
`