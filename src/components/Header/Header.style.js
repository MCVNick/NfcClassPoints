import {StyleSheet} from 'react-native';

import colors from '../../resources/style/colors';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.darkestBlue,
    padding: 16,
  },
  headerText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default styles;
