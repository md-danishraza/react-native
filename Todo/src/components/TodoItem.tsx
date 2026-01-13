import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Todo } from '../../App'; 

type Props = {
  item: Todo;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({ item, deleteTodo }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.value}</Text>
      <TouchableOpacity 
        onPress={() => deleteTodo(item.id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10, // Space between items
    // Shadow for iOS/Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2, 
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    maxWidth: '85%', // Prevent text overlapping button
  },
  deleteButton: {
    backgroundColor: '#ffdddd',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  }
});

export default TodoItem;