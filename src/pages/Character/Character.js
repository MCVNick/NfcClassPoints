import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

import StudentNameHeader from '../../components/Character/StudentNameHeader/StudentNameHeader';
import CharacterNameHeader from '../../components/Character/CharacterNameHeader/CharacterNameHeader';

import {initNfc, readNdef} from './Character.functions';
import styles from './Character.style';

const Character = props => {
  const [asciiNFC, setAsciiNFC] = useState(null);
  const [cardInfo, setCardInfo] = useState(null);
  const [characterInfo, setCharacterInfo] = useState(null);

  const getCharacterInfo = async () => {
    if (cardInfo && cardInfo.key) {
      let tempCharacterInfo = await axios.get(
        `https://nfc.nicholasmcqueen.com/api/getCharacterInfo?id=${cardInfo.key}`,
      );
      tempCharacterInfo = tempCharacterInfo.data[0];

      setCharacterInfo(tempCharacterInfo);
    }
  };

  useEffect(() => {
    initNfc;
    let objectHelper = {setAsciiNFC, setCardInfo};
    setAsciiNFC(readNdef(objectHelper));
  }, []);

  useEffect(() => {
    if (cardInfo) {
      getCharacterInfo();
    }
  }, [cardInfo]);

  return (
    <View style={styles.characterContainer}>
      <StudentNameHeader cardInfo={cardInfo} />
      {characterInfo && characterInfo.name && (
        <CharacterNameHeader characterName={characterInfo.name} />
      )}
    </View>
  );
};

export default Character;
