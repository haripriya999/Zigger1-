import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image} from 'react-native';
import Bananas from './utils/Bananas';

export default class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
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
});
