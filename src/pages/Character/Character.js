import React from 'react';
import {Button, Text, View} from 'react-native';

import styles from './Character.style';

const Character = () => {
  return (
    <View style={styles.characterContainer}>
      <Text style={styles.Name}>Student Name</Text>
      <Button
        title="Hi"
        onPress={async () => {
          console.log('scan card');
        }}
      />
    </View>
  );
};

export default Character;
