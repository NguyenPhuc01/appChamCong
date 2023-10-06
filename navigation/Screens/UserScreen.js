import React from "react";
import { View, Text } from "react-native";

function UserScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        UserScreen
      </Text>
    </View>
  );
}

export default UserScreen;
