import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppContainer from '~/routes';

import { colors } from '~/styles';

// Removes warning messages while in development mode
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core', 'Remote Debugger is in a background tab']);

export default App = () => {
    console.disableYellowBox = true;
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={ colors.PRIMARY_COLOR } />

          <AppContainer />
        </SafeAreaView>
    )
}