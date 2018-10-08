import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonClicked() {
    const { email, password } = this.state;
    this.setState({
      error: ''
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((err) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((error) => {
            console.log('hata'); //TODO
            this.setState({
              error: 'Authentication failed'
            });
          });
      });
  }

  render() {
    const { error } = this.state;

    const errorMsg = error ? (
      <Text style={styles.errorText}>
        {error}
      </Text>
    ) : null
    return (
      <View style={{ padding: 30 }}>
        <View>
          <Input text='Email' inputPlaceHolder='Enter Email'
                 onChangeText={(text) => {
                   this.setState({
                     email: text
                   })
                 }}
                 value={this.state.email}/>
        </View>
        <View>
          <Input text='Password' inputPlaceHolder='Enter Password'
                 onChangeText={(text) => {
                   this.setState({
                     password: text
                   })
                 }}
                 secureTextEntry
                 value={this.state.password}/>
        </View>
        {errorMsg}
        <View style={styles.buttonWrapper}>
          <Button onPress={this.onButtonClicked.bind(this)} color='#E87B79' title='Login'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 18,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    paddingTop: 5,
    alignSelf: 'center'
  }
})

export default LoginForm;
