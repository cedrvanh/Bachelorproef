import React, { useEffect } from 'react';
import Modal from 'react-native-modal';

import { AuthService as _authService } from '~/services';

import { colors } from '~/styles';

import LoadingIndicator from '~/components/LoadingIndicator';

export default SplashScreen = ({ navigation }) => {
    useEffect(() => {
        _bootstrapApplication();
    }, [])

    _bootstrapApplication = async () => {
        const token = await _authService.getToken();

        setTimeout(() => {
            navigation.navigate(token ? 'App' : 'Auth');
        }, 3000);
    }

    return (
        <Modal 
            isVisible={true}
            backdropColor={colors.PRIMARY_COLOR}
            backdropOpacity={1}
            style={{
                flex: 1
            }}
        >
            <LoadingIndicator />
        </Modal>
    )
}