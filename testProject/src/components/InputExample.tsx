import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.output}>You typed: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default InputExample;