import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../constants/themes';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: margin.l,
    marginVertical: margin.m,
  },
  header: {
    flex: 1,
  },
  date: {
    fontSize: fontSize.m,
    fontFamily: fontFamily.bold,
    color: colors.dark,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
