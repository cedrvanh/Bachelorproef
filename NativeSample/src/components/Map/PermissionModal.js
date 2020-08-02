import React from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import styled from 'styled-components';

import Modal from '~/components/Modal';
import LottieWrapper from '~/components/LottieWrapper';

import { colors, utils, typography } from '~/styles';

export default PermissionModal = ({ onRequestPermission }) => {
    
    requestPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              onRequestPermission(granted);
            } else {
              console.log("Permission Denied");
            }
        } catch (err) {
            Alert.alert(err);
        }
    }

    return (
        <Modal onClose={requestPermission} >
            <Container>
                <LottieWrapper 
                    source={require('~/assets/lottie/marker.json')}
                    loop={false}
                    style={{
                        flex: 1,
                    }}
                />
            </Container>
            <ModalText>
                In order to use Adventure Routes, we will need to have access to your geolocation.
            </ModalText>
        </Modal>
    )
}

const Container = styled.View`
    height: 175px; 
`

const ModalText = styled.Text`
    margin: ${ utils.GUTTER_LARGE } 0;
    color: ${ colors.WHITE };
    fontSize: ${ typography.FONT_SIZE_DEFAULT };
    textAlign: center;
`