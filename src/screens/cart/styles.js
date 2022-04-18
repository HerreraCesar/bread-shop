import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../constants/themes';

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: margin.m,
  },
  list: {
    flex: 1,
    marginBottom: margin.l,
  },
  footer: {
    flex: 1,
    flexGrow: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  total: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.l,
  },
  totalPrice: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.l,
    padding: padding.s,
  },
});
