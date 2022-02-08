import React, { useContext, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes';
import Login from './src/screens/Login';
import { Settings } from './src/screens/Settings';
import { SelectScreen } from './src/components/SelectScreen';
import theme from './src/styles/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { SettingProvider } from './src/hooks/settings';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <SettingProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectScreen"
              component={SelectScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Routes"
              component={AppRoutes}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SettingProvider>
    </ThemeProvider>
  );
}
