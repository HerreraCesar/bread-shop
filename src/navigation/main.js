import CartNavigator from './cart';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import OrderNavigator from './order';
import React from 'react';
import ShopNavigator from './shop';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabStack = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="ShopStack"
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen
        name="ShopStack"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'home' : 'home-outline'} size={20} />
          ),
          title: 'Shop',
        }}
      />
      <TabStack.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'cart' : 'cart-outline'} size={20} />
          ),
          title: 'Cart',
        }}
      />
      <TabStack.Screen
        name="OrderStack"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <IonicIcons name={focused ? 'list' : 'list-outline'} size={20} />
          ),
          title: 'Orders',
        }}
      />
    </TabStack.Navigator>
  );
};

export default MainNavigator;
