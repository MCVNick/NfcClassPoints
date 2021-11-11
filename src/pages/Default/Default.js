import React from 'react';
import {Text, View} from 'react-native';

import styles from './Default.style';

const DefaultScreen = () => {
  return (
    <View style={styles.defaultContainer}>
      <Text>Default Screen</Text>
    </View>
  );
};

export default DefaultScreen;
