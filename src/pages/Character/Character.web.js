import React from 'react';
import {Text, View} from 'react-native';

import styles from './Character.style';

const Character = () => {
  return (
    <View style={styles.characterContainer}>
      <Text style={styles.Name}>Student Name</Text>
    </View>
  );
};

export default Character;
