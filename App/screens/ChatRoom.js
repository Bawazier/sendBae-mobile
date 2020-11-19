import React from 'react';
import {Content, Footer, Icon, Input, Item} from 'native-base';
import {FlatList} from 'react-native';
import CardChat from '../components/CardChat';

const ChatRoom = () => {
  const data = [
    {
      id: 1,
      send: 'Assalamu alaikum',
    },
    {
      id: 2,
      reply: 'Waalaikum salam',
    },
    {
      id: 3,
      send: 'Apa Kabar ?',
    },
    {
      id: 4,
      reply:
        'Kalau saya dulu terinspirasi dari temen2 deket ane dan saudara ane yang anak IT',
    },
  ];
  return (
    <>
      <Content style={{backgroundColor: '#081b33'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <CardChat
              message={item.send || item.reply}
              messageColor={item.send ? '#152642' : '#2f4562'}
              messagePosition={!item.send}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Content>
      <Footer style={{backgroundColor: '#2f4562'}}>
        <Item
          style={{
            backgroundColor: '#2f4562',
            width: '100%',
            borderBottomWidth: 0,
          }}>
          <Icon
            name="paperclip"
            type="FontAwesome"
            style={{color: '#767d92', margin: 10}}
          />
          <Input placeholder="Write a message..." style={{color: '#fff'}} />
          <Icon
            name="smile-o"
            type="FontAwesome"
            style={{color: '#767d92', margin: 10}}
          />
          <Icon
            name="send"
            type="FontAwesome"
            style={{color: '#4995be', margin: 10}}
          />
        </Item>
      </Footer>
    </>
  );
};

export default ChatRoom;
