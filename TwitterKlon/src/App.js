import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

export default class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
