import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import StudentNameHeader from '../../components/Character/StudentNameHeader/StudentNameHeader';
import CharacterNameHeader from '../../components/Character/CharacterNameHeader/CharacterNameHeader';

import {initNfc, readNdef} from './Character.functions';
import styles from './Character.style';

const Character = props => {
  const [asciiNFC, setAsciiNFC] = useState(null);
  const [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    initNfc;
    let objectHelper = {setAsciiNFC, setCardInfo};
    setAsciiNFC(readNdef(objectHelper));
  }, []);

  return (
    <View style={styles.characterContainer}>
      <StudentNameHeader cardInfo={cardInfo} />
      <CharacterNameHeader />
    </View>
  );
};

export default Character;
