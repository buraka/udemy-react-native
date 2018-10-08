import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonClicked() {
    const { email, password } = this.state;
    this.setState({
      error: '',
      loading: true
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    });
  }
  render() {
    const { error, loading } = this.state;

    const errorMsg = error ? (
      <Text style={styles.errorText}>
        {error}
      </Text>
    ) : null;

    const loginButton = loading ? (
      <Spinner />
    ) : (
      <Button onPress={this.onButtonClicked.bind(this)}
              color='#E87B79'
              title='Login'/>
    )
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
          {loginButton}
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
