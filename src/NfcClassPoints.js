/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Platform} from 'react-native';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import styles from './NfcClassPoints.style';

const App = () => {
  return (
    <View
      nativeID="nfc-class-points-main"
      style={
        Platform.OS === 'web'
          ? styles.sectionContainerWeb
          : styles.sectionContainer
      }>
      <Header />
      <Navbar />
    </View>
  );
};

export default App;
