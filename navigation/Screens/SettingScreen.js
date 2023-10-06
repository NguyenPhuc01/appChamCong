import React from "react";
import { View, Text } from "react-native";

export default function SettingScreen({setIsLogin}) {
  console.log("🚀 ~ file: SettingScreen.js:5 ~ SettingScreen ~ setIsLogin:", setIsLogin)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => {
          setIsLogin(false)
        }}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
   logout
      </Text>
    </View>
  );
}
