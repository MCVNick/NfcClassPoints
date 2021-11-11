import React from 'react';
import {Text, View} from 'react-native';

import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>NFC Class Points</Text>
    </View>
  );
};

export default Header;
