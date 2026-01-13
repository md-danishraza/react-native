import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
  addTodo: (todo: string) => void;
};

const TodoInput = ({ addTodo }: Props) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return; // Preventing empty todos
    addTodo(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999"
        onChangeText={setText}
        value={text} 
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', // Align input and button side-by-side
    marginBottom: 20,
  },
  input: {
    flex: 1, // Take up all available width
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoInput;