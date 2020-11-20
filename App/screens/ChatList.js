import React from 'react';
import {FlatList} from 'react-native';
import {
  Content,
  Header,
  Item,
  Input,
  Icon,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge,
} from 'native-base';

const ChatList = ({navigation}) => {
  const data = [
    {
      id: 1,
      imageUser:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
      nameUser: 'Kumar Pratik',
      newMessage: 'Latihan sederhana membuat aplikasi cuaca',
      newMessageCount: 204,
      timeMessage: '10:32',
    },
    {
      id: 2,
      imageUser:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
      nameUser: 'Kumar Pratik',
      newMessage: 'Latihan sederhana membuat aplikasi cuaca',
      newMessageCount: 204,
      timeMessage: '10:32',
    },
    {
      id: 3,
      imageUser:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
      nameUser: 'Kumar Pratik',
      newMessage: 'Latihan sederhana membuat aplikasi cuaca',
      newMessageCount: 204,
      timeMessage: '10:32',
    },
    {
      id: 4,
      imageUser:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
      nameUser: 'Kumar Pratik',
      newMessage: 'Latihan sederhana membuat aplikasi cuaca',
      newMessageCount: 204,
      timeMessage: '10:32',
    },
  ];
  return (
    <>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: '#081b33',
          borderBottomColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="navicon"
          type="FontAwesome"
          style={{color: '#767d92', marginRight: 15, fontSize: 25}}
          onPress={() => navigation.openDrawer()}
        />
        <Item style={{backgroundColor: '#152642'}}>
          <Icon
            name="search"
            type="FontAwesome"
            style={{color: '#2f4562', fontSize: 15}}
          />
          <Input
            placeholder="Search"
            style={{color: '#e6e9ef', fontSize: 15}}
          />
        </Item>
      </Header>
      <Content style={{backgroundColor: '#081b33'}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListItem avatar onPress={() => navigation.navigate('ChatRoom')}>
              <Left>
                <Thumbnail
                  source={{
                    uri: item.imageUser,
                  }}
                />
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{color: '#e6e9ef'}}>{item.nameUser}</Text>
                <Text note style={{color: '#767d92'}}>
                  {item.newMessage > 20
                    ? item.newMessage
                    : item.newMessage.concat('...')}
                </Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Text note style={{color: '#767d92'}}>
                  {item.timeMessage}
                </Text>
                <Badge info style={{marginVertical: 10}}>
                  <Text>{item.newMessageCount}</Text>
                </Badge>
              </Right>
            </ListItem>
          )}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </>
  );
};

export default ChatList;
