/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './views/auth/LoginScreen';
import SignupScreen from './views/auth/SignupScreen';
import HomeScreen from './views/HomeScreen';
import MainScreen from './views/MainScreen';
import ProfileScreen from './views/ProfileScreen';
import DistributorScreen from './views/DistributorScreen';
import DonateScreen from './views/DonateScreen';

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
    Profile: {screen: ProfileScreen},
    Distributors: {screen: DistributorScreen},
    Donate: {screen: DonateScreen},
});

const App = createAppContainer(MainNavigator);

export default App;