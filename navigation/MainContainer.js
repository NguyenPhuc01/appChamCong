import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import HomeScreen from "../navigation/Screens/Home";
import SettingScreen from "../navigation/Screens/SettingScreen";
import UserScreen from "../navigation/Screens/UserScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "./Screens/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const homeName = "Home";
const userName = "Scan";
const settingsName = "Settings";
const Tab = createBottomTabNavigator();
export default function MainContainer() {
  const [isLogin, setIsLogin] = React.useState(false);
  const getTokenFromStorage = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        console.log("Token retrieved:", token);
        // Xử lý khi lấy token thành công
        setIsLogin(true);
      } else {
        // Xử lý khi không tìm thấy token
        setIsLogin(false);
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
      setIsLogin(false);
    }
  };
  useEffect(() => {
    getTokenFromStorage();
  }, []);
  console.log(
    "🚀 ~ file: MainContainer.js:19 ~ MainContainer ~ isLogin:",
    isLogin
  );
  return (
    <NavigationContainer>
      {isLogin ? (
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
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10,
            },
            tabBarStyle: {
              padding: 10,
              height: 70,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={userName} component={UserScreen} />
          <Tab.Screen name={settingsName} options={{ tabBarLabel: "Settings" }}>
            {() => <SettingScreen setIsLogin={setIsLogin} />}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <LoginScreen setIsLogin={setIsLogin} />
      )}
    </NavigationContainer>
  );
}
