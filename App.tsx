import React, { useContext, useState } from 'react';
import { locale } from './src/locale';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { Locale } from './src/locale';
import { AppRoutes } from './src/routes/app.routes';
import Login from './src/screens/Login';
import { Settings } from './src/screens/Settings';
import { SelectScreen } from './src/components/SelectScreen';
import { DocumentSelect } from './src/components/DocumentSelect';
import { PdfViewer } from './src/components/PdfViewer';
import { SubjectProgress } from './src/screens/SubjectProgress';
import theme from './src/styles/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { SettingProvider } from './src/hooks/settings';
import Recharge from './src/screens/Recharge/Recharge';
import { Report } from './src/screens/Report';
import { Provider } from 'mobx-react';
import store from './src/stores';
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  initializeApp(firebaseConfig);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <Provider rootStore={store}>
      <ThemeProvider theme={theme}>
        <SettingProvider>
          <NavigationContainer theme={{ colors: { background: '#000' } }}>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                cardStyle: { backgroundColor: 'transparent' },
                ...TransitionPresets.SlideFromRightIOS
              }}
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
                name="DocumentSelect"
                component={DocumentSelect}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PdfViewer"
                component={PdfViewer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Routes"
                component={AppRoutes}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Recharge"
                component={Recharge}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Report"
                component={Report}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
            <FlashMessage position="top" />
          </NavigationContainer>
          <Locale />
        </SettingProvider>
      </ThemeProvider>
    </Provider>
  );
}
