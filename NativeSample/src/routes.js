import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Home'
    }
);
  
export default AppNavigator;