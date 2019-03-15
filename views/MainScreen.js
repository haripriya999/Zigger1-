import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image} from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg'
    };

    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

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
