import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Spinner } from './spinner';

const MyButton = ({ spinner, title, onPress, color, backgroundColor }) => {
  const content = spinner ? (
    <Spinner />
  ) : (
    <Button onPress={onPress}
            color={color}
            title={title}/>
  )

  let { buttonWrapper } = styles;
  buttonWrapper = { ...buttonWrapper,
    backgroundColor: backgroundColor || '#EFF0EE'};

  return (
    <View style={buttonWrapper}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
    height: 49,
    borderRadius: 10,
    justifyContent: 'center',
    fontSize: 18
  }
})

export { MyButton }
