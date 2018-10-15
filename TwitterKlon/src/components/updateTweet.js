import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { changeTweet, updateTweet, deleteTweet } from '../actions';
import { TextArea, MyButton } from './common';

class UpdateTweet extends Component {

  componentDidMount() {
    const { tweet } = this.props.tweet;

    this.props.changeTweet(tweet);
    this.checkEmail = this.checkEmail.bind(this);

  }

  onChangeTweet(tweet) {
      this.props.changeTweet(tweet);
  }

  checkEmail(callback) {
    const { email } = this.props.user;
    const tweetEmail = this.props.tweet.email;
    if (tweetEmail === email) {
      callback();
    } else {
      Alert.alert(
        'Wrong Email',
        'This is not your tweet, so you can\'t update or delete it. ',
        [
          {text: 'OK', onPress:() => console.log('wrong email')}
        ]
      )
    }
  }

  updateTweet() {
    this.checkEmail(() => {
      const tweetObj = { ...this.props.tweet,
                          tweet: this.props.tweetForm.tweet};
      this.props.updateTweet(tweetObj);
    })
  }

  deleteTweet() {
    this.checkEmail(() => {
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
    })
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
  console.log(state.auth.user);
  return {
    user: state.auth.user,
    tweetForm: state.tweetForm
  }
}

export default connect(mapStateToProps, {
  changeTweet, updateTweet, deleteTweet
})(UpdateTweet);
