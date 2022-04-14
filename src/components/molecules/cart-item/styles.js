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
    marginHorizontal: margin.m,
  },
  header: {
    fontFamily: fontFamily.bold,
  },
  name: {
    fontSize: fontSize.l,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    fontSize: fontSize.m,
    fontFamily: fontFamily.regular,
  },
  price: {
    fontSize: fontSize.m,
    fontFamily: fontFamily.regular,
  },
});
