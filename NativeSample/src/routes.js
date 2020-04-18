import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import CameraScreen from './screens/Camera';
import SignInScreen from './screens/Auth/SignIn';

import Icon from './components/Icon';
import colors from './styles/colors';



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
                tabBarIcon: ({ tintcolor }) => (
                    <Icon name="ios-map" size={28} />
                )
            }
        },
        Camera: {
            screen: CameraScreen,
            navigationOptions: {
                tabBarIcon: ({ tintcolor }) => (
                    <Icon name="ios-camera" size={28} />
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintcolor }) => (
                    <Icon name="ios-cart" size={28} />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                backgroundColor: colors.SECONDARY_COLOR,
                borderTopColor: 'transparent'
            }
        }
    }
);
  
export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppNavigator,
            Auth: AuthNavigator
        },
        {
            initialRouteName: 'App',
        }
    )
);