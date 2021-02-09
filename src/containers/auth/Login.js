/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as color from '@theme/color';

const Login = ({navigation}) => {
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginProcess = async () => {
    try {
      await AsyncStorage.setItem('id_user', userId);
      navigation.navigate('Home');
    } catch (e) {
      // saving error
      // put sentry or any crashlytics here
    }
  };

  // Handle to input number only
  const handleInputChange = (text) => {
    if (!text) {
      return setUserId('');
    }
    if (/^\d+$/.test(text)) {
      setUserId(text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <MaterialCommunityIcons name="account" size={28} color={color.grey} />
        <TextInput
          style={styles.textInput}
          placeholder="User Id"
          onChangeText={(text) => handleInputChange(text)}
          placeholderTextColor={color.grey}
          autoCorrect={false}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.login}>
        <MaterialCommunityIcons name="lock" size={28} color={color.grey} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={color.grey}
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        onPress={loginProcess}
        disabled={userId.length > 0 && password.length > 0 ? false : true}
        style={[
          styles.appButtonContainer,
          {
            backgroundColor:
              userId.length > 0 && password.length > 0
                ? color.green
                : color.grey,
          },
        ]}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
