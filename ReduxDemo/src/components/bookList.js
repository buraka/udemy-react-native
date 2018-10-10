import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

class BookList extends Component {

  render() {
    const { books } = this.props;
    return (
      <View>
        <FlatList
          data={books}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.isbn}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
