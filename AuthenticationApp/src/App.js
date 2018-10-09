import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import Banner from './components/banner';
import LoginForm from './components/loginForm';
import { Spinner, MyButton } from './components/common';

class App extends Component {
  state = {
    loggedIn: null
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCJhtvn-BrShjfykf8P-A-22QsNA2rmprA',
      authDomain: 'authentication-3205a.firebaseapp.com',
      databaseURL: 'https://authentication-3205a.firebaseio.com',
      projectId: 'authentication-3205a',
      storageBucket: 'authentication-3205a.appspot.com',
      messagingSenderId: '834761648773'
    });

    firebase.auth().onAuthStateChanged((user) => {
      const loggedIn = user ? true : false;

      this.setState({
        loggedIn
      })
    })
  }

  renderContent() {
    const { loggedIn } = this.state;

    switch(loggedIn) {
      case true:
        return (
          <MyButton spinner={false}
                    onPress={() => firebase.auth().signOut()}
                    color='#E87B79'
                    title='Logout'/>
        )
      case false:
        return (
          <LoginForm />
        )
      default:
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Banner text='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#F3F3F3',
    flex: 1
  }
})

export default App;
