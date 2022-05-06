import React, { useState } from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home';
import { Documents } from '../screens/Documents';
import  Feed  from '../screens/Feed';
import { RU } from '../screens/RU';
import Login from '../screens/Login/Login';
import { getTheme } from '../hooks/settings';
import theme from '../styles/theme';
import { Updater } from '../components/Updater';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  
  const [,setUpdate] = useState(false);

  return (
    <>
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors[getTheme()].select,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          // backgroundColor: '#23272a',
          backgroundColor: theme.colors[getTheme()].background_secondary,
          borderTopWidth: 0
        }
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          // tabBarStyle:{display: 'none'},
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />

      <Screen
        name="Documentos"
        component={Documents}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name="Notícias"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="email" size={size} color={color} />
          )
        }}
      />

      <Screen
        name="RU"
        component={RU}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
    <Updater update={setUpdate} />
    </>
  );
}
