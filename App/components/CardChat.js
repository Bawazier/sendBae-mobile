import React from 'react';
import {Card, CardItem, Body, Right, Text, View} from 'native-base';

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
          <Body>
            <Text style={{color: '#e6e9ef'}}>{props.message}</Text>
            <Text note style={{color: '#767d92', alignSelf: 'flex-end'}}>
              9:12 PM
            </Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default CardChat;
