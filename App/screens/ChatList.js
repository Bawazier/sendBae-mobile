import React from 'react';
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

const ChatList = () => {
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
        {[...Array(10)].map((item) => (
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                  }}
                />
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{color: '#e6e9ef'}}>Kumar Pratik</Text>
                <Text note style={{color: '#767d92'}}>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Text note style={{color: '#767d92'}}>
                  3:43 pm
                </Text>
                <Badge info style={{marginVertical: 10}}>
                  <Text>2</Text>
                </Badge>
              </Right>
            </ListItem>
          </List>
        ))}
      </Content>
    </>
  );
};

export default ChatList;
