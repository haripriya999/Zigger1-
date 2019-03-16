import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';
import Bananas from './utils/Bananas';
import ErrorMessage from './utils/ErrorMessage';
import firebase from 'firebase';

export default class DistributorScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {distributors: [], errorMessage: ''};
        this.distributors = [];
        firebase.database().ref('distributors').once('value')
        .then(distributors => {
            distributors = JSON.parse(JSON.stringify(distributors));
            Object.keys(distributors).map((id) => this.distributors.push({ latitude: distributors[id].latitude
                , longitude: distributors[id].longitude, foodUnits: distributors[id].foodUnits}));
            this.setState({ distributors: this.distributors });
        })
        .catch(error => this.setState({ errorMessage: error.message }));

    }

  render() {
    const {navigate} = this.props.navigation;
    const cuser = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    return (
      <ScrollView style={styles.container}>

        <FlatList
            data={this.state.distributors}
            renderItem={({item}) => <Text>{item.latitude} {item.longitude} {item.foodUnits}</Text>}
        />

        <Bananas></Bananas>
        <ErrorMessage errorMessage={this.state.errorMessage} />
        
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5FCFF',
  },
  btnContainer: {
    margin: 20, 
    width: 200,
  },
});
