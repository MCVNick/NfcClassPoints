import {StyleSheet} from 'react-native';

import colors from '../../resources/style/colors';

const styles = StyleSheet.create({
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: 16,
  },
  navbarText: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 28,
  },
  tabBar: {
    backgroundColor: colors.darkBlue,
  },
  tabBarLabel: {
    color: colors.orange,
    fontWeight: 'bold',
    textTransform: 'none',
  },
});

export default styles;
