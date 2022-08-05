import React from 'react';
import {StyleSheet, Text, TextInput, View, Platform} from 'react-native';
import {THEOplayerView} from 'react-native-theoplayer';
import licenseKey from '../licenseKey.json';

const CONFIG = {
  license: Platform.select(licenseKey),
  chromeless: true,
};

const SOURCE = {
  sources: [
    {
      type: 'application/x-mpegurl',
      src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
    },
  ],
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Press enter to show the on-screen keyboard
      </Text>
      <TextInput style={styles.textInput} placeholderTextColor="#888888" />
      <View style={styles.videoContainer}>
        <THEOplayerView style={styles.video} config={CONFIG} source={SOURCE} />
      </View>
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
  videoContainer: {
    marginTop: 50,
    width: 640,
    height: 400,
  },
  video: {
    flex: 1,
  },
});

export default App;
