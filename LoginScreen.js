/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this._onLogin = this._onLogin.bind(this);
    this.state = {email: "", password: "", errorMessage: ""};
  }

  handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  _onLogin() {
    this.handleSignIn();
  }
  

  render() {
    return (

      <View style={styles.container}>

        <Input
          placeholder='Email'
          onChangeText={(email) => this.setState({email})}
        />

        <Input
          placeholder='Password'
          textContentType='password'
          onChangeText={(password) => this.setState({password})}
        />

        <Button style={styles.loginbtn}
          title="Login"
          type="outline"
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="black"
            />
          }
          containerViewStyle={{width: '100%', marginLeft: 0, marginRight: 0}}
          onPress={this._onLogin}
        />
        
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.errorMessage}
        </Text>

      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginbtn: {
    color: '#FFFFFF',
    margin: 10,
  },
});
