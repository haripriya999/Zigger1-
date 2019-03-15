import React, {Component} from 'react';
import { Alert, Platform, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default class ErrorMessage extends React.Component {

  render() {
    return (
        <Text style={{padding: 10, fontSize: 20, color: '#DC143C'}}>
          {this.props.errorMessage}
        </Text>
    );
  }

}