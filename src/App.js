import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Press enter to show the on-screen keyboard
      </Text>
      <TextInput style={styles.textInput} placeholderTextColor="#888888" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
  },
  textInput: {
    width: 800,
    fontSize: 40,
    padding: 8,
  },
});

export default App;
