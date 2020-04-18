import React from 'react';

import VectorIcon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default Icon = ({ size, name, color, ...attributes }) => {
    return ( 
        <VectorIcon
            size={size} 
            name={name}
            color={color || colors.PRIMARY_COLOR}
            {...attributes}
        /> 
    )
}