import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";

const { Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {

    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#A949C1',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 5,
                    backgroundColor: '#252525',
                    paddingBottom: 3
                }
            }}
        >
            <Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="Documentos"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialCommunityIcons
                            name="file-document"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="Notícias"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name="email"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name="RU"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialCommunityIcons
                            name="silverware-fork-knife"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}