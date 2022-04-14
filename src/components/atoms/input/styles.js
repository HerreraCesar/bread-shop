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
  },
  containerDisabled: {
    flex: 1,
    opacity: 0.5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingVertical: padding.s,
  },
  messageText: {
    color: colors.error,
    fontSize: fontSize.s,
    marginVertical: margin.s,
  },
});
