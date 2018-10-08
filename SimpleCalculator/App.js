
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: ''
    }

    this.sum = this.sum.bind(this);
    this.deduct = this.deduct.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);
  }

  sum() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const result = number1 + number2;

    this.setState({
      result: result
    })
  }

  deduct() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const result = number1 - number2;

    this.setState({
      result: result
    })
  }

  mult() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const result = number1 * number2;

    this.setState({
      result: result
    })
  }

  div() {
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);

    const result = number1 / number2;

    this.setState({
      result: result
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Simple Calculator'/>

        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
                     placeholder='First Number'
                     onChangeText={(text) => {
                       this.setState({
                         input1: text
                       })
                     }}
                     value={this.state.input1}
            />

            <View style={styles.buttonWrapper}>
              <Button onPress={this.sum}
                      color="#841584"
                      title= '+'
                  />
              <Button onPress={this.deduct}
                      color="#841584"
                      title= '-'
                  />
              <Button onPress={this.mult}
                      color="#841584"
                      title= '*'
                  />
              <Button onPress={this.div}
                      color="#841584"
                      title= '/'
                  />

            </View>

            <TextInput style={styles.input}
                       placeholder='Second Number'
                       onChangeText={(text) => {
                         this.setState({
                           input2: text
                         })
                       }}
                       value={this.state.input2}
              />

            <Text style={styles.sampleText}>Result: {this.state.result}</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40
  },
  sampleText: {
    height: 30,
    fontSize: 14
  },
});
