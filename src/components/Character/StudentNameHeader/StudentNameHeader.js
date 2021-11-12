import React, {memo} from 'react';
import {Text, View} from 'react-native';

import styles from './StudentNameHeader.style';

const StudentNameHeader = memo(({cardInfo}) => {
  return (
    <View style={styles.nameContainer}>
      {cardInfo && cardInfo.name ? (
        <Text style={styles.studentName}>{cardInfo.name}</Text>
      ) : (
        <Text style={styles.studentName}>Scan Character Card</Text>
      )}
    </View>
  );
});

export default StudentNameHeader;
