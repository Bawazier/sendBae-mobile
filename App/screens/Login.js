import React from 'react';
import {View, Text, Button, Item, Input, Form} from 'native-base';

import {useNavigation} from '@react-navigation/native';

const Login = () => {
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
          alignItems: 'flex-start',
          justifyContent: 'center',
          margin: 40,
        }}>
        <Text style={{color: '#e6e9ef', fontSize: 25, marginVertical: 10}}>
          Your Phone Number
        </Text>
        <Text style={{color: '#2f4562', fontSize: 15}}>
          Please confirm your country code and enter your mobile phone number
        </Text>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          margin: 40,
        }}>
        <Form>
          <Item style={{width: '100%', borderColor: '#2f4562'}}>
            <Input
              value="Indonesia"
              style={{textAlign: 'left', color: '#e6e9ef'}}
            />
          </Item>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <Item style={{width: '20%', borderColor: '#2f4562'}}>
              <Input
                value="+62"
                disabled
                style={{textAlign: 'center', color: '#e6e9ef'}}
              />
            </Item>
            <Item style={{width: '75%', borderColor: '#4995be'}}>
              <Input style={{color: '#e6e9ef'}} />
            </Item>
          </View>
        </Form>
      </View>
      <View style={{width: '100%', paddingHorizontal: 35}}>
        <Button
          full
          style={{backgroundColor: '#4995be', color: '#e6e9ef'}}
          onPress={() => navigation.navigate('Profile')}>
          <Text>NEXT</Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
