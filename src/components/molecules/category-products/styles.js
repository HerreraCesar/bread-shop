import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../../constants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
    marginTop: margin.m,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.l,
    color: colors.primary,
  },
  description: {
    fontFamily: fontFamily.regular,
    fontSize: fontFamily.m,
    color: colors.dark,
    marginVertical: margin.s,
  },
  price: {
    fontFamily: fontFamily.black,
    fontSize: fontSize.xl,
    color: 'black',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.placeholder,
    borderWidth: 1,
  },
});
