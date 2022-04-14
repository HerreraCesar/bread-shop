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
    margin: margin.s,
  },
  list: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexGrow: 0.15,
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: margin.m,
  },
  total: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.l,
    padding: padding.s,
  },
  totalPrice: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.m,
    padding: padding.s,
  },
});
