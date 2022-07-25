import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase';
import { Locale } from './src/locale';
import theme from './src/styles/theme';
import { SettingProvider } from './src/hooks/settings';
import { Provider } from 'mobx-react';
import store from './src/stores';
import FlashMessage from "react-native-flash-message";
import { StatusBar } from 'expo-status-bar';
import { getTheme } from './src/hooks/settings';
import { StackNavigator } from './src/navigation/stack';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium
  });

  initializeApp(firebaseConfig);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider rootStore={store}>
      <ThemeProvider theme={theme}>
        <SettingProvider>
          <StatusBar style={getTheme() === 'dark' ? 'light' : 'dark'}/>
          <StackNavigator />
          <FlashMessage position="top" />
          <Locale />
        </SettingProvider>
      </ThemeProvider>
    </Provider>
  );
}
