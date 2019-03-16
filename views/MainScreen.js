import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image} from 'react-native';
import Bananas from './utils/Bananas';

export default class HomeScreen extends React.Component {
  render() {
    const user = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    return (
      <View style={styles.container}>

        <Text>{user[Object.keys(user)[0]].username}</Text>
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
});
