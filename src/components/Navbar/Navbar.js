import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './Navbar.style';
import DefaultScreen from '../../pages/Default/Default';
import Character from '../../pages/Character/Character';

const Tab = createMaterialTopTabNavigator();

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}>
        <Tab.Screen name="Character" component={Character} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navbar;
