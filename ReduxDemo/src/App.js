import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
        </View>
      </Provider>
    );
  }
}
