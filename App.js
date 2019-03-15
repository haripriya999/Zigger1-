/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import MainScreen from './views/MainScreen';
import LoginScreen from './views/auth/LoginScreen';
import SignupScreen from './views/auth/SignupScreen';

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    Main: {screen: MainScreen},
});

const App = createAppContainer(MainNavigator);

export default App;