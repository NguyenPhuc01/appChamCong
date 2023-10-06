import React from 'react'
import { View,Text } from 'react-native'

export default function LoginScreen({setIsLogin}) {
  return (
    <View>
        <Text style={{marginTop:50}} onPress={()=>{setIsLogin(true)}}>
        LoginScreen
        </Text>
    </View>
  )
}
