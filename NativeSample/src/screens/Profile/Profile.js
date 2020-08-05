import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';

import { AuthService as _authService } from '~/services';

import { colors, typography, utils } from '~/styles';

import Header from '~/components/Header';

const BACKGROUND_IMAGE = require('~/assets/map.png');

export default ProfileScreen = ({ navigation }) => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        getUserData();
    }, []);

    console.log(user);

    getUserData = async () => {
        const user = await _authService.getAccount();
        setUser(user);
    }

    return (
        <Container>
            {/* <Header title="Your Hero" onBack={() => navigation.navigate('Home')}/> */}
            <BackgroundImage source={BACKGROUND_IMAGE} >
                <ProfileImage />
            </BackgroundImage>
            <View style={{ flex: 2, padding: 16 }}>
                <View style={{ alignItems: 'center' }}>
                    <Title>Ser Podrick</Title>
                    <SubTitle>Knight</SubTitle>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Card>
                        <CardContent>My Items</CardContent>
                    </Card>
                    <Card>
                        <CardContent>My Quests</CardContent>
                    </Card>
                </View>
            </View>
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
`

const ProfileImage = styled.View`
    width: 150px;
    height: 150px;
    backgroundColor: red;
    border-radius: 100;
    position: absolute;
    bottom: 0;
    alignSelf: center;
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