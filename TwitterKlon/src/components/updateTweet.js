import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { changeTweet, updateTweet, deleteTweet } from '../actions';
import { TextArea, MyButton } from './common';

class UpdateTweet extends Component {

  componentDidMount() {
    const { tweet } = this.props.tweet;

    this.props.changeTweet(tweet);
  }

  onChangeTweet(tweet) {
      this.props.changeTweet(tweet);
  }

  updateTweet() {
    const tweetObj = { ...this.props.tweet,
                        tweet: this.props.tweetForm.tweet};
    this.props.updateTweet(tweetObj);
  }

  deleteTweet() {
    Alert.alert(
      'Are you sure?',
      'This tweet will be deleted after you clicked OK.',
      [
        {text: 'OK', onPress:() => {
          const { uid } = this.props.tweet;
          this.props.deleteTweet(uid);
        }},
        {text: 'Cancel', onPress:() => console.log('canceled')}
      ]
    )
  }

  render() {
    const { tweetForm } = this.props;

    return (
      <View style={styles.updateContainer}>
        <TextArea placeholder='Type here...'
                  value={tweetForm.tweet}
                  onChangeText={this.onChangeTweet.bind(this)}
                  />
        <MyButton spinner={false}
                  title='Update'
                  onPress={this.updateTweet.bind(this)}
                  color='#E87B79'/>
        <MyButton spinner={false}
                  title='Delete'
                  onPress={this.deleteTweet.bind(this)}
                  color='#EFF0EE'
                  backgroundColor='#E87B79' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  updateContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  }
});

const mapStateToProps = state => {
  return {
    tweetForm: state.tweetForm
  }
}

export default connect(mapStateToProps, {
  changeTweet, updateTweet, deleteTweet
})(UpdateTweet);
