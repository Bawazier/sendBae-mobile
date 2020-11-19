import React from 'react';
import {Content, Footer, FooterTab, Icon, Input, Item} from 'native-base';

const ChatRoom = () => {
  return (
    <>
      <Content style={{backgroundColor: '#152642'}}></Content>
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
