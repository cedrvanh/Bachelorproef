import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthService as _authService } from '~/services';

export default AuthLoadingScreen = ({ navigation }) => {
    useEffect(() => {
        checkAuthentication();
    }, [])

    checkAuthentication = async () => {
        const token = await _authService.getToken();
        navigation.navigate(token ? 'App' : 'Auth');
    }

    return (
        <View>
            <ActivityIndicator />
        </View>
    )
}