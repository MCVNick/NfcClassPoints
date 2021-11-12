import React, {memo} from 'react';
import {Text, View} from 'react-native';

import styles from './CharacterNameHeader.style';

const CharacterNameHeader = memo(({cardInfo}) => {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.characterName}>CharacterName</Text>
    </View>
  );
});

export default CharacterNameHeader;
