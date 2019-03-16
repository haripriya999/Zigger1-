import React from 'react';
import {Alert, Platform, StyleSheet, Text, View, ScrollView, Image, FlatList, Button, Linking } from 'react-native';

export default class DistributorListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    openMap(latitude, longitude) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${latitude},${longitude}`;
        const label = 'Custom Label';
        const url = Platform.select({
          ios: `${scheme}${label}@${latLng}`,
          android: `${scheme}${latLng}(${label})`
        });
    
        Linking.openURL(url); 
    }

  render() {
   return (
      <View style={styles.container}>
        <Text>{this.props.username}</Text>

        <View style={{alignSelf: 'flex-end'}}>
            <Button title="View Map" onPress={() => this.openMap(this.props.latitude, this.props.longitude)}></Button>
        </View>
        
        <Text>Units left: {this.props.foodUnits}</Text>
        
        <View style={{alignSelf: 'flex-end'}}>
            <Button title="Claim Unit"></Button>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
  btnContainer: {
    margin: 20, 
    width: 200,
  },
});
