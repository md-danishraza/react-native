import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  TouchableOpacity, 
  TouchableHighlight,
  Pressable,
  Alert 
} from 'react-native';

const ButtonScreen = () => {
  
  const handlePress = (type: string) => {
    Alert.alert('Button Pressed', `You clicked the ${type}`);
  };

  return (
    <View style={styles.container}>
      
      {/* 1. DEFAULT BUTTON (Limited Styling) */}
      <Text style={styles.label}>1. Default Button (Can't style size/color easily)</Text>
      <Button 
        title="I am a Default Button" 
        onPress={() => handlePress('Default Button')} 
        color="#841584" // Only color can be changed
      />

      {/* 2. TOUCHABLE OPACITY (Most Common) */}
      <Text style={styles.label}>2. Touchable Opacity (Fades on press)</Text>
      <TouchableOpacity 
        style={styles.customBtn} 
        onPress={() => handlePress('TouchableOpacity')}
        activeOpacity={0.7} // Optional: how transparent it gets (0 to 1)
      >
        <Text style={styles.btnText}>Custom Opacity Button</Text>
      </TouchableOpacity>

      {/* 3. TOUCHABLE HIGHLIGHT (Background Color Change) */}
      <Text style={styles.label}>3. Touchable Highlight (Background fill)</Text>
      <TouchableHighlight 
        style={[styles.customBtn, { backgroundColor: 'orange' }]} 
        onPress={() => handlePress('TouchableHighlight')}
        underlayColor="#DD2C00" // The color it turns into when pressed
      >
        <Text style={styles.btnText}>Custom Highlight Button</Text>
      </TouchableHighlight>

      {/* 4. PRESSABLE (Modern & Native Ripple) */}
      <Text style={styles.label}>4. Pressable (Native Android Ripple)</Text>
      <Pressable
        onPress={() => handlePress('Pressable')}
        style={({ pressed }) => [
          styles.customBtn,
          { backgroundColor: pressed ? '#2c3e50' : '#34495e' } // Dynamic styling!
        ]}
        android_ripple={{ color: 'white' }} // Android only visual effect
      >
        <Text style={styles.btnText}>Modern Pressable</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    marginTop: 30,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  customBtn: {
    height: 50,
    borderRadius: 8, // Rounded corners
    backgroundColor: '#007AFF', // iOS Blue
    justifyContent: 'center', // Vertical center
    alignItems: 'center', // Horizontal center
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3, // Shadow for Android
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default ButtonScreen;