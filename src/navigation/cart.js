import {colors, fontFamily, fontSize} from '../constants/themes';

import Cart from '../screens/cart/index';
import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
        headerTitleStyle: {
          fontFamily: fontFamily.regular,
          fontSize: fontSize.m,
        },
      }}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
