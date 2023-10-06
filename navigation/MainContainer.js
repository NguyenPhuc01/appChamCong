import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import HomeScreen from "../navigation/Screens/Home";
import SettingScreen from "../navigation/Screens/SettingScreen";
import UserScreen from "../navigation/Screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const homeName = "Home";
const userName = "Scan";
const settingsName = "Settings";
const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === userName) {
              iconName = focused ? "scan" : "scan-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: {
            padding: 10,
            height: 70,
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: "tomato",
        //   inactiveTintColor: "grey",
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70 },
        // }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={userName} component={UserScreen} />
        <Tab.Screen name={settingsName} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}