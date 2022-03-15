/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';


import Card from './src/components/Card';
import Header from './src/components/Header';
import Searchbar from './src/components/Searchbar';


const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Searchbar />
      <Card />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(245,245,245)",
    flex: 1,
  }
})

export default App;
