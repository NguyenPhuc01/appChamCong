import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginSVG from "../../assets/Images/login.png";
import InputField from "../../component/InputField";
import CustomButton from "../../component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen({ setIsLogin }) {
  const navigation = useNavigation();
  const [showPassWord, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://be-app-cham-cong.vercel.app/api/v1/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.status === 200) {
        const token = await AsyncStorage.setItem(
          "token",
          response.data.data.token
        );
        if (token !== null) {
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.log("🚀 ~ file: LoginScreen.js:36 ~ handleLogin ~ error:", error);
    }
  };
  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={LoginSVG}
            style={{
              width: "100%",
              height: 180,
              transform: [{ rotate: "-5deg" }],
              marginBottom: 20,
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Login
        </Text>

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          name="email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          name="password"
          inputType={showPassWord ? "" : "password"}
          fieldButtonLabel={showPassWord ? "Hidden" : "Show"}
          fieldButtonFunction={() => {
            setShowPassWord(!showPassWord);
          }}
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />

        <CustomButton label={"Login"} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}
