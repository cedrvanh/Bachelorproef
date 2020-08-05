import React from 'react';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';

import { colors } from '~/styles';

const ProfileIcon = ({ navigation }) => {
    _onPress = () => {
        navigation.navigate('Profile');
    }

    return (
        <ProfileCircle onPress={_onPress} />
    )
}

const ProfileCircle = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    backgroundColor: ${colors.DARK_COLOR};
    borderColor: ${colors.ACCENT_COLOR};
    borderWidth: 3px;
    borderRadius: 50px;
`

export default withNavigation(ProfileIcon);