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
  },
  name: {
    fontSize: fontSize.l,
    fontFamily: fontFamily.bold,
    marginHorizontal: margin.m,
    marginTop: margin.m,
    color: colors.primary,
  },
  description: {
    fontSize: fontSize.m,
    marginHorizontal: margin.m,
    fontFamily: fontFamily.regular,
    marginTop: margin.m,
    color: colors.dark,
  },
  price: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.black,
    marginHorizontal: margin.m,
    marginVertical: margin.m,
    
    color: 'black',
  },
  weight: {
    fontSize: fontSize.m,
    marginHorizontal: margin.m,
    fontFamily: fontFamily.regular,
    marginTop: margin.m,
    color: colors.dark,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  button: {
    marginHorizontal: margin.m,
  },
});
