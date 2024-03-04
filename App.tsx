/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Header from './src/components/Header';
import Main from './src/components/Main';

function App(): React.JSX.Element {
  return (
    // Layout
    <View style={styles.mainCont}>
      {/* <Header /> */}
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'black',
  },
});

export default App;
