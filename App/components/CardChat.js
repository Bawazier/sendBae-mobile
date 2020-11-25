import React from 'react';
import {Card, CardItem, Body, Right, Text, View} from 'native-base';
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
      <Card
        style={{
          maxWidth: 300,
          width: '100%',
          borderColor: props.messageColor,
          borderRadius: 8,
          overflow: 'hidden',
        }}>
        <CardItem style={{backgroundColor: props.messageColor}}>
          <Body
            style={{
              alignItems: props.messagePosition ? 'flex-end' : 'flex-start',
            }}>
            {props.messageImage ? (
              <Image
                source={{uri: API_URL + props.messageImage}}
                style={{width: '100%', height: 200}}
              />
            ) : (
              <Text style={{color: '#e6e9ef'}}>{props.message}</Text>
            )}
            <Text
              note
              style={{
                color: '#767d92',
                alignSelf: props.messagePosition ? 'flex-start' : 'flex-end',
              }}>
              {props.messageTime}
            </Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default CardChat;
