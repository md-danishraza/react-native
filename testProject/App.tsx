/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HelloWorldApp from './src/components/HelloWord';
import {  Image, StyleSheet, Text, View } from 'react-native';
import CounterButton from './src/components/CounterBtn';
import InputExample from './src/components/InputExample';


function App() {
  

  return (
    <SafeAreaProvider>
      <HelloWorldApp/>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </View>
      </View>
      <Text style={styles.firstText}>FROM TEXT COMPONENT</Text>

      {/* images */}
      <View style={{display:"flex",flexDirection:"row",gap:10}}>
      <Image
        source={require('./assets/logo.jpg')} 
        style={{ width: 100, height: 100 }}
      />
       <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100 }}
      />
    </View>
    <CounterButton/>
    <InputExample/>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"green"
  },
  boxContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap"
  },
  box:{
    width:50,
    height:50,
    backgroundColor:"red",
    borderWidth:2,
    borderColor:"black"
  },
  firstText:{
    fontFamily:'Roboto',
    fontSize:20
  }
})



export default App;
