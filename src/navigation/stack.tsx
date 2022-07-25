
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets
  } from '@react-navigation/stack';
  import Login from '../screens/Login';
import { Settings } from '../screens/Settings';
import { SelectScreen } from '../components/SelectScreen';
import { DocumentSelect } from '../components/DocumentSelect';
import { PdfViewer } from '../components/PdfViewer';
import Recharge from '../screens/Recharge/Recharge';
import { Report } from '../screens/Report';
import { AppRoutes } from './tab';

export function StackNavigator() {

    const Stack = createStackNavigator();

    return(
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
          </NavigationContainer>
    );
}