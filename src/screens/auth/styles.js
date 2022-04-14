import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  margin,
  padding,
} from '../../constants/themes';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  containerCard: {
    height: height / 1.6,
    width: width * 0.8,
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: padding.l,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontSize: fontSize.l,
    fontFamily: fontFamily.bold,
    marginBottom: margin.xl,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: fontSize.m,
    marginBottom: margin.xl,
    fontFamily: fontFamily.bold,
  },
  linkText: {
    color: colors.primary,
    fontSize: fontSize.m,
    fontFamily: fontFamily.regular,
    marginTop: margin.l,
    textAlign: 'center',
  },
});
