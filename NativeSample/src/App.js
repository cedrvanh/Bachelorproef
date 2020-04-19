import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppContainer from './routes';
import { colors } from './styles';

export default App = () => {
    return (
        <SafeAreaView  style={{ flex: 1 }}>
          <StatusBar backgroundColor={ colors.SECONDARY_COLOR } />

          <AppContainer />
        </SafeAreaView>
    )
}