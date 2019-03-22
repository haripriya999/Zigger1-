import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid} from 'react-native';
import Bananas from './utils/Bananas';
import ErrorMessage from './utils/ErrorMessage';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

export default class DonateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.cuser = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    this.cuser = this.cuser[Object.keys(this.cuser)[0]];
    this.state = {units: 0, lat: 0, lng: 0, errorMessage: '', disabled: false};
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
     position => {
          this.setState({lat : JSON.stringify(position.coords.latitude) , lng: JSON.stringify(position.coords.longitude)});
     },
     error => alert(JSON.stringify(error)),
     { enableHighAccuracy: true, timeout: 20000 }
    );
  };

  donate() {
    this.setState({disabled: true});
    firebase.database().ref('distributors').limitToFirst(1).once('value')
    .then((cdistributor) => {
      cdistributor = JSON.parse(JSON.stringify(cdistributor));
      cdistributor = cdistributor[Object.keys(cdistributor)[0]];
      firebase.database().ref('donations').push({ 
        foodUnits: this.state.units,
        donorLat: this.state.lat,
        donorLng: this.state.lng,
        donorPhoneno: this.cuser.phoneno,
        distLat: cdistributor.latitude,
        distLng: cdistributor.longitude,
        distPhoneno: cdistributor.phoneno,
      })
      .then(() => { ToastAndroid.show(this.state.units+' units donated!', ToastAndroid.SHORT); this.setState({disabled: false})} )
      .catch(error => { this.setState({disabled: false, errorMessage: error.message}); });
    })
    .catch(error => { this.setState({disabled: false, errorMessage: error.message}); });
  }

  render() {
    const {navigate} = this.props.navigation;
    const cuser = JSON.parse(JSON.stringify(this.props.navigation.getParam('user')));
    return (
      <LinearGradient
      colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}}
      style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.show}>How many units of food would you like to donate?</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Units'
              onChangeText={(unitss) => this.setState({units: unitss})}
            />
          </View>

          <View style={styles.btnContainer}>
            <Button
              title="Donate"
              disabled={this.state.disabled}
              onPress={() => this.donate()}
            />
          </View>

          <ErrorMessage errorMessage={this.state.errorMessage}></ErrorMessage>
        </View>

      </LinearGradient>
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
