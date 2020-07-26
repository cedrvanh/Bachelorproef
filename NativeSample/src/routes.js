import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import styled from 'styled-components';

import HomeScreen from '~/screens/Home';
import ProfileScreen from '~/screens/Profile';
import CameraScreen from '~/screens/Camera';
import LeaderboardScreen from '~/screens/Leaderboard';
import SignInScreen from '~/screens/Auth/SignIn';
import SignUpScreen from '~/screens/Auth/SignUp';
import AuthLoadingScreen from '~/screens/Auth/AuthLoading';

import Icon from '~/components/Icon';
import { colors } from '~/styles';

const ICON_SIZE = 28;

// Auth Routes -  If user is not logged in
const AuthNavigator = createStackNavigator(
    {
        SignIn: SignInScreen,
        SignUp: SignUpScreen
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none'
    }
)

// App Routes - Tab bar
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

// User Routes - Not part of main app flow
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
            AuthLoading: AuthLoadingScreen
            // User: UserNavigator
        },
        {
            initialRouteName: 'AuthLoading',
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