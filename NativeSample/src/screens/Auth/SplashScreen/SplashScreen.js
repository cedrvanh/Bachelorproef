import React, { useEffect } from 'react';

import { AuthService as _authService } from '~/services';

import LoadingIndicator from '~/components/LoadingIndicator';

export default SplashScreen = ({ navigation }) => {
    useEffect(() => {
        _bootstrapApplication();
    }, [])

    _bootstrapApplication = async () => {
        const token = await _authService.getToken();

        setTimeout(() => {
            navigation.navigate(token ? 'App' : 'Auth');
        }, 1500);
    }

    return <LoadingIndicator />
}