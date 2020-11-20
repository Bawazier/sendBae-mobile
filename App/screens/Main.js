import React from 'react';
import {View, Text, Button} from 'native-base';

import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#152642',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 40,
        }}>
        <Text style={{color: '#e6e9ef', fontSize: 25, marginVertical: 10}}>
          SendBae Mobile
        </Text>
        <Text style={{color: '#2f4562', fontSize: 15}}>
          Welcome to the official SendBae Mobile App
        </Text>
        <Text style={{color: '#2f4562', fontSize: 15}}>
          it's fast and secure
        </Text>
      </View>
      <View style={{width: '100%', paddingHorizontal: 35}}>
        <Button
          full
          style={{backgroundColor: '#4995be', color: '#e6e9ef'}}
          onPress={() => navigation.navigate('Login')}>
          <Text>START MESSAGING</Text>
        </Button>
      </View>
    </View>
  );
};

export default Main;
