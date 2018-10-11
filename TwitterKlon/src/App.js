import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm';

export default class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAVeBc_11BrqNtUwaIUKfmsfIq_MoIEPK8",
      authDomain: "twitterklon-e9c7d.firebaseapp.com",
      databaseURL: "https://twitterklon-e9c7d.firebaseio.com",
      projectId: "twitterklon-e9c7d",
      storageBucket: "",
      messagingSenderId: "657608627343"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1, backgroundColor: '#ddd', justifyContent: 'center'}}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
