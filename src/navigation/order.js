import {colors, fontFamily, fontSize} from '../constants/themes';

import Order from '../screens/order/index';
import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Orders" component={Order} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
