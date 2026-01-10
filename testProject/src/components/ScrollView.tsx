import React, { useCallback, useState } from 'react'
import { Alert, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ScrollViewComp() {
    const [refreshing, setRefreshing] = useState(false);

  // Simulatung a network request for Pull-to-Refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('Refreshed!', 'Data has been updated.');
    }, 2000);
  }, []);
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTitle}>My Scroll App</Text>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        // Hides the vertical scrollbar
        showsVerticalScrollIndicator={false}
        // Critical for forms/inputs
        keyboardShouldPersistTaps="handled"
        // Pull to Refresh Logic
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.sectionTitle}>Horizontal Scroll (Stories)</Text>
        
        {/* NESTED HORIZONTAL SCROLLVIEW */}
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <View style={styles.storyBox}><Text>Item 1</Text></View>
          <View style={styles.storyBox}><Text>Item 2</Text></View>
          <View style={styles.storyBox}><Text>Item 3</Text></View>
          <View style={styles.storyBox}><Text>Item 4</Text></View>
          <View style={styles.storyBox}><Text>Item 5</Text></View>
        </ScrollView>

        <Text style={styles.sectionTitle}>Vertical Content</Text>
        
        {/* STATIC CONTENT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 1</Text>
          <Text>This is some content inside a card.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 2</Text>
          <Text>Scroll down to see more.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card 3</Text>
          <Text>Try pulling down from the top to refresh!</Text>
        </View>

        {/* Generating dummy boxes to force scrolling */}
        {Array(5).fill(0).map((_, i) => (
          <TouchableOpacity key={i} style={styles.dummyItem} onPress={() => console.log('Pressed')}>
            <Text style={{color: 'white'}}>List Item {i + 4}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: 50, 
      backgroundColor: '#f0f0f0',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    scrollView: {
      // Styling the "Window"
      backgroundColor: '#e5e5e5',
      marginHorizontal: 10,
    },
    contentContainer: {
      // Styling the "Paper" inside the window
      paddingBottom: 30, // Extra space at bottom so last item isn't cut off
      alignItems: 'center', // Centers items horizontally
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      alignSelf: 'flex-start',
      marginVertical: 10,
      marginLeft: 10,
    },
    horizontalScroll: {
      maxHeight: 100, // Constrain height so it doesn't expand weirdly
      marginBottom: 20,
    },
    storyBox: {
      width: 80,
      height: 80,
      backgroundColor: '#add8e6',
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40, // Circle
    },
    card: {
      width: '90%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      marginBottom: 15,
      elevation: 3, // Shadow on Android
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    dummyItem: {
      width: '90%',
      height: 100,
      backgroundColor: '#555',
      marginVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    }
  });

export default ScrollViewComp
