import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import BookList from './components/bookList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Book List' />
          <BookList />
        </View>
      </Provider>
    );
  }
}
