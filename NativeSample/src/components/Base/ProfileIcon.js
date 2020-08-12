import React from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';

import { colors } from '~/styles';
import ResponsiveImage from '~/components/ResponsiveImage';

const ProfileIcon = ({ user, navigation }) => {
    _onPress = () => {
        navigation.navigate('Profile');
    }

    return (
        <Icon onPress={_onPress} name={"ios-person"} size={32} color={colors.WHITE}/>
    )
}

const ProfileCircle = styled(ResponsiveImage)`
    width: 40px;
    height: 40px;
    backgroundColor: ${colors.DARK_COLOR};
    borderColor: ${colors.ACCENT_COLOR};
    borderWidth: 3px;
    borderRadius: 50px;
`

export default withNavigation(ProfileIcon);