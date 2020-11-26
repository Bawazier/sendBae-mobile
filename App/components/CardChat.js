import React from 'react';
import {Icon, Text, View} from 'native-base';
import {Image} from 'react-native';

import {API_URL} from '@env';

const CardChat = (props) => {
  return (
    <View
      style={{
        width: '100%',
        alignItems: props.messagePosition ? 'flex-end' : 'flex-start',
        paddingHorizontal: 5,
      }}>
      <View
        style={{
          maxWidth: 300,
          width: 'auto',
          borderColor: props.messageColor,
          borderRadius: 8,
          overflow: 'hidden',
          backgroundColor: props.messageColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginVertical: 10,
          flexWrap: 'wrap',
        }}>
        {props.messageImage ? (
          <Image
            source={{uri: API_URL + props.messageImage}}
            style={{width: '100%', height: 200}}
          />
        ) : (
          <Text style={{color: '#e6e9ef'}}>{props.message}</Text>
        )}
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
            width: 'auto',
            marginLeft: 10,
            textAlign: 'right',
          }}>
          <Text
            note
            style={{
              color: '#767d92',
              alignSelf: 'flex-end',
            }}>
            {props.messageTime}
          </Text>
          {props.messagePosition ? (
            <Icon
              name="check-circle"
              type="FontAwesome"
              style={{
                color: props.read ? '#62B1F6' : '#f4f4f4',
                fontSize: 20,
                marginLeft: 5,
              }}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CardChat;
