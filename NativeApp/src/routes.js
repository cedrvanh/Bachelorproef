import { createStackNavigator } from 'react-navigation';

import MapScreen from './screens/Map';

const AppNavigator = createStackNavigator({
    Map: {
        screen: MapScreen
    }
});

export default AppNavigator;