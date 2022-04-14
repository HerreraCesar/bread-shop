import AuthNavigator from './auth';
import MainNavigator from './main';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const isAuth = useSelector(state => state.auth.userId);
  return (
    <NavigationContainer>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
