import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const TextArea = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.textAreaWrapper}>
      <TextInput placeholder={placeholder}
                 onChangeText={onChangeText}
                 multiline={true}
                 value={value}
                 style={styles.textArea}
                 />
    </View>
  )
}

const styles = StyleSheet.create({
  textAreaWrapper: {
    borderWidth: 1,
    borderColor: '#CFD8DC',
    height: 200
  },
  textArea: {
    height: 200,
    color: '#7B8D93',
    fontSize: 18
  }
});

export { TextArea };
