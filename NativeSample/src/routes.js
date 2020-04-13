import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

import SignInScreen from './screens/Auth/SignIn';

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
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Home'
    }
);
  
export default createAppContainer(
    createSwitchNavigator(
        {
            App: AppNavigator,
            Auth: AuthNavigator
        },
        {
            initialRouteName: 'Auth',
        }
    )
);