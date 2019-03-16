import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image} from 'react-native';
import Bananas from './utils/Bananas';
import firebase from 'firebase';

export default class DonateScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    const cuser = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    return (
      <View style={styles.container}>

        <Bananas></Bananas>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnContainer: {
    margin: 20, 
    width: 200,
  },
});
