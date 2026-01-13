/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {  FlatList, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import TodoInput from './src/components/TodoInput';
import { useState } from 'react';
import TodoItem from './src/components/TodoItem';


export type Todo = {
  id:number
  value:string
}

function App() {
  const [todos,setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prev) => [
      ...prev, 
      { id: Date.now(), value: todo } 
    ]);
  };

 const deleteTodo = (id: number) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

  return (
    <SafeAreaViewBase style={styles.safeArea}>
    <View style={styles.container}>
      <Text style={styles.headerText}>My Tasks</Text>
      
      <TodoInput addTodo={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem item={item} deleteTodo={deleteTodo} />
        )}
        contentContainerStyle={styles.listContent}
        // Empty state message
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
        }
      />
    </View>
  </SafeAreaViewBase>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background for whole screen
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 50,
    fontSize: 16,
  }
});

export default App;
