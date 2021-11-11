import {StyleSheet} from 'react-native';

import colors from './resources/style/colors';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  sectionContainerWeb: {
    backgroundColor: colors.blue,
    minHeight: '100vh',
  },
});

export default styles;
