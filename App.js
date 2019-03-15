/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import MainScreen from './MainScreen';

const MainNavigator = createStackNavigator({
 Home: {screen: HomeScreen},
 Login: {screen: LoginScreen},
 Signup: {screen: SignupScreen},
 Main: {screen: MainScreen},
});

const App = createAppContainer(MainNavigator);

export default App;