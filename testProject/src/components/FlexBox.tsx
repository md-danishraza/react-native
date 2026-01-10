import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
  return (
    // PARENT: The main container must have flex: 1 to fill the mobile screen
    <View style={styles.container}>
      
      {/* 1. FIXED HEIGHT (Header) */}
      <View style={styles.header}>
        <Text style={styles.textWhite}>Header (Fixed 60px)</Text>
      </View>

      {/* 2. FLEXIBLE BODY (Takes all remaining space) */}
      <View style={styles.body}>
        <Text style={styles.label}>Body (flex: 1)</Text>

        {/* 3. ROW LAYOUT (Horizontal) */}
        <Text style={styles.label}>Row Layout (Space Between):</Text>
        <View style={styles.rowContainer}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>

        {/* 4. CENTERING CONTENT (The Holy Grail) */}
        <Text style={styles.label}>Centered Box:</Text>
        <View style={styles.centeredBox}>
          <Text style={styles.textWhite}>Centered</Text>
        </View>
      </View>

      {/* 5. FIXED FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.textWhite}>Footer (Fixed 50px)</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  // PARENT
  container: {
    flex: 1, // Crucial: Fills the whole screen height
    backgroundColor: '#f2f2f2',
    // Default flexDirection is 'column', so we stack Header -> Body -> Footer
  },

  // SECTIONS
  header: {
    height: 60, // Fixed height
    backgroundColor: '#3b5998',
    justifyContent: 'center', // Centers text vertically (Main Axis for column)
    alignItems: 'center',     // Centers text horizontally (Cross Axis for column)
  },
  
  body: {
    flex: 1, // MAGIC: Takes up all vertical space left over by Header and Footer
    backgroundColor: '#dce1eb',
    padding: 20,
    // Note: We didn't set flexDirection, so it defaults to 'column'
  },
  
  footer: {
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ROW EXAMPLE
  rowContainer: {
    flexDirection: 'row', // Switch to horizontal
    justifyContent: 'space-between', // Push items to edges and middle
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  
  // CENTER EXAMPLE
  centeredBox: {
    width: 100,
    height: 100,
    backgroundColor: '#e91e63',
    alignSelf: 'center', // Overrides parent's alignItems just for this one item
    justifyContent: 'center', // Vertical center (inside the box)
    alignItems: 'center',     // Horizontal center (inside the box)
  },

  // COMMON STYLES
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#4caf50',
  },
  textWhite: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#555',
  }
});

export default FlexScreen;