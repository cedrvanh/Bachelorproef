import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

import { AuthService as _authService } from '~/services';

import { colors, typography, utils } from '~/styles';

import { handleError } from '~/services/api';

import Header from '~/components/Header';
import Button from '~/components/Base/Button';
import Icon from '~/components/Base/Icon';
import LoadingIndicator from "~/components/LoadingIndicator";

const BACKGROUND_IMAGE = require('~/assets/map.png');

export default ProfileScreen = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getUserData();
    }, []);

    getUserData = async () => {
        try {
            const { data } = await _authService.getAccount();
            setUser(data);
            setIsLoading(false);
        } catch (err) {
            handleError(err);
        }
    }

    onSignOut = async () => {
        try {
            await _authService.signOut();
            navigation.navigate('SignIn');
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <Container>
            {isLoading ? <LoadingIndicator /> : (
                <React.Fragment>
                <BackgroundImage source={BACKGROUND_IMAGE}>
                    <Header title="Your Hero" onBack={() => navigation.navigate('Home')}/>
                    <ProfileImage />
                </BackgroundImage>
                <View style={{ flex: 2, padding: 16, marginTop: 60 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Title>{user.character.name}</Title>
                        <SubTitle>{user.character.class.name}</SubTitle>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
                        <Card onPress={() => navigation.navigate('Inventory', { uid: user.id })}>
                            <CardContent>My Items</CardContent>
                        </Card>
                        <Card>
                            <CardContent>My Quests</CardContent>
                        </Card>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Button label="Sign Out" onPress={onSignOut}/> 
                    </View>
                </View>
                </React.Fragment>
            )}
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: ${colors.PRIMARY_COLOR};
`

const Title = styled.Text`
    color: ${colors.WHITE};
    fontSize: 24px;
    fontWeight: ${typography.FONT_WEIGHT_BOLD};
`;

const SubTitle = styled.Text`
    color: ${colors.WHITE};
    fontSize: 18px;
    textTransform: uppercase;
`

const BackgroundImage = styled.ImageBackground`
    width: 100%;
    flex: 1;
    padding: 0 ${utils.GUTTER};
`

const ProfileImage = styled.View`
    position: absolute;
    bottom: -50px;
    alignSelf: center;
    width: 150px;
    height: 150px;
    backgroundColor: red;
    borderRadius: 100px;
`

const Card = styled.TouchableOpacity`
    width: 48%;
    marginTop: 8px;
    min-height: 75px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${colors.PRIMARY_LIGHT_COLOR}
    borderRadius: ${ utils.BORDER_RADIUS_SMALL };
`

const CardContent = styled.Text`
    color: ${ colors.PLACEHOLDER_COLOR };
    fontWeight: ${ typography.FONT_WEIGHT_BOLD };
    fontSize: 16px;
    textTransform: uppercase;
`