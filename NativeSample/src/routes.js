import React from 'react';

import styled from 'styled-components';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import CameraScreen from './screens/Camera';
import LeaderboardScreen from './screens/Leaderboard';
import SignInScreen from './screens/Auth/SignIn';

import Icon from './components/Icon';
import { colors } from './styles';

const ICON_SIZE = 28;

const AuthNavigator = createStackNavigator(
    {
        SignIn: SignInScreen
    },
    {
        headerMode: 'none'
    }
)

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-map" size={ICON_SIZE} color={tintColor} />
                )
            }
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarIcon: () => (
                    <CircleTab>
                        <Icon name="ios-camera" size={ICON_SIZE + 4} />
                    </CircleTab>
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-cart" size={ICON_SIZE} color={tintColor} />
                ),
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: colors.ACCENT_DARK_COLOR,
            inactiveTintColor: colors.PRIMARY_LIGHT_COLOR,
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: colors.PRIMARY_COLOR,
                borderTopColor: 'transparent',
            }
        }
    }
);

const UserNavigator = createStackNavigator(
    {
        Leaderboard: LeaderboardScreen,
    }, 
    {
        initialRouteName: 'Leaderboard',
        headerMode: 'none'
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppNavigator,
            Auth: AuthNavigator,
            User: UserNavigator
        },
        {
            initialRouteName: 'App',
        }
    )
);

const CircleTab = styled.View`
        display: flex;
        alignItems: center;
        justifyContent: center;
        width: 60px;
        height: 60px;
        borderRadius: 50px;
        backgroundColor: #fff;
        marginTop: -40px;
`