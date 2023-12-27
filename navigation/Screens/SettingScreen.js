import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingScreen({ setIsLogin }) {
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setIsLogin(false);
    } catch (error) {
      console.error(`Error removing item with key `, error);
      // Xử lý lỗi khi không thể xóa mục từ AsyncStorage
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={removeToken} style={{ fontSize: 26, fontWeight: "bold" }}>
        logout
      </Text>
    </View>
  );
}
