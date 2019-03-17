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
        <View style={styles.cardLeftContainer}>
          <Text style={{color: '#4CBB17', fontSize: 24}}>{this.props.username}</Text>
          <Text>
            <Text style={{color: '#DC143C', fontSize: 20}}>Units left:</Text> {this.props.foodUnits}
          </Text>
        </View>
        
        <View style={styles.cardRightContainer}>
          <View style={styles.cardBtnContainer}>
              <Button title="View Map" onPress={() => this.openMap(this.props.latitude, this.props.longitude)}></Button>
          </View>

          <View style={styles.cardBtnContainer}>
              <Button title="Claim Unit"></Button>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 3,
  },
  btnContainer: {
    margin: 20, 
    width: 200,
  },
  cardLeftContainer: {
    width: '50%',
  },
  cardRightContainer: {
    width: '50%',
  },
  cardBtnContainer: {
    margin: 5,
    width: 100,
    alignSelf: 'flex-end'
  }
});
