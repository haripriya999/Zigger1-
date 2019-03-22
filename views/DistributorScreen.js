import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, ScrollView, Image, FlatList, RefreshControl } from 'react-native';
import ErrorMessage from './utils/ErrorMessage';
import DistributorListItem from './utils/DistributorListItem';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

export default class DistributorScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {distributors: [], errorMessage: '', refreshing: false};
    this.distributors = [];
    this.fetchData();
  }

  static navigationOptions = () => ({
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'black'
    },
  });
  
  fetchData() {
    this.distributors = [];
    return (firebase.database().ref('distributors').once('value')
    .then(distributors => {
        distributors = JSON.parse(JSON.stringify(distributors));
        Object.keys(distributors).map((id) => this.distributors.push({ uid: id, username: distributors[id].username, latitude: distributors[id].latitude
            , longitude: distributors[id].longitude, foodUnits: distributors[id].foodUnits}));
        this.setState({ distributors: this.distributors });
    })
    .catch(error => this.setState({ errorMessage: error.message })));
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    const cuser = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    return (
      <LinearGradient
      colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}}>

        <ScrollView style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >

          <FlatList
              data={this.state.distributors}
              renderItem={({item}) => <DistributorListItem user={cuser} uid={item.uid} username={item.username} latitude={item.latitude} longitude={item.longitude}
              foodUnits={item.foodUnits}></DistributorListItem>}
          />

          <ErrorMessage errorMessage={this.state.errorMessage} />
          
        </ScrollView>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  },
  field: {
    fontSize:20, 
    color: '#841584',
  },
  btnContainer: {
    margin: 20, 
    width: 200,
  },
  card:{
   padding:30,
   width: '80%',
   marginTop:100,
   marginBottom:100,
   backgroundColor: '#DDDDDD',
   borderRadius:20,
   borderWidth: 3,
   borderColor: '#222222',
   flex: 1,
   alignItems: 'center',
   flexDirection: 'column',
   justifyContent: 'center',
  },
  show:{
   fontSize:20,
   color: '#222222',
   
  },
  inputContainer: {
    margin: 6, 
    width: 100,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
