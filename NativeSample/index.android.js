import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

YellowBox.ignoreWarnings(['Remote Debugger']);

AppRegistry.registerComponent('NativeSample', () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => App);