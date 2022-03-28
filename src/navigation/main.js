import {colors, fontFamily, fontSize} from '../constants/themes';

import Category from '../screens/category/index';
import Home from '../screens/home/index';
import {Platform} from 'react-native';
import Product from '../screens/product/index';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primary,
        headerTitleStyle: {
          fontFamily: fontFamily.regular,
          fontSize: fontSize.m,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
