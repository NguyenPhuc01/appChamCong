import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../assets/Images/login.png'
import InputField from '../../component/InputField';
import CustomButton from '../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({setIsLogin}) {
  const navigation = useNavigation();
const [showPassWord,setShowPassWord]=useState(false)
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
      
            <Image
        source={LoginSVG} 
        style={{ width: '100%', height: 180, transform: [{ rotate: '-5deg' }],marginBottom:20 }} 
      />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

<InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType={showPassWord?'':"password"}
          fieldButtonLabel={showPassWord ? 'Hidden':'Show'}
          fieldButtonFunction={() => {
       setShowPassWord(!showPassWord);
          }}
        />
        
        <CustomButton label={"Login"} onPress={() => {
          console.log('login ');
        }} />


      </View>
    </SafeAreaView>
  )
}
