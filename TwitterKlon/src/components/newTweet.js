import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, MyButton } from './common';

class NewTweet extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text> New Tweet </Text>
        <Input text='Tweet' inputPlaceHolder='Enter Email'
               onChangeText={() => console.log()}
               />
      </View>
    )
  }
}

export default NewTweet;
