import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  const [color, setColor] = useState('N/A');
  const colors = ['red', 'green', 'blue'];
  const colors2 = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black', 'gray', 'brown', 'pink'];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Hello React Native</Text>
        <Text style={styles.paragraphText}>This is a React Native Application created with npx and 'react-native init'.</Text>
        <View style={styles.colorsContainer}>
          {colors.map((color, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => setColor(color)}>
                <View style={[styles.box, { backgroundColor: color}]}/>
              </TouchableOpacity>
            )
          })}
        </View>
        <Text style={styles.colorSelectedText}>Color Selected: {color.toUpperCase()}</Text>
        <Text style={styles.scrollText}>Scrollable Colors</Text>
        <ScrollView horizontal>
          {colors2.map((color, index) => {
            return <View key={index} style={[styles.box, index !== 0 && { marginLeft: 12 }, { backgroundColor: color}]}/>
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  header: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10
  },
  paragraphText: {
    fontSize: 16,
    color: 'black'
  },
  colorsContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    justifyContent: 'space-between'
  },
  box: {
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
    width: 110
  },
  colorSelectedText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 12
  },
  scrollText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 12
  },
  scrollableColors: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default App;
