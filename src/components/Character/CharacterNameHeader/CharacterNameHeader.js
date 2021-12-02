import React, {memo, useEffect} from 'react';
import {Text, View} from 'react-native';

import styles from './CharacterNameHeader.style';

const CharacterNameHeader = memo(({characterName}) => {
  return (
    characterName && (
      <View style={styles.nameContainer}>
        <Text style={styles.characterName}>{characterName}</Text>
      </View>
    )
  );
});

export default CharacterNameHeader;
