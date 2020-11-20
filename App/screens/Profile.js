import React from 'react';
import {
  Content,
  View,
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
  Button,
} from 'native-base';

const Profile = () => {
  return (
    <Content
      style={{
        backgroundColor: '#2f4562',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Thumbnail
          source={{
            uri:
              'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
          }}
          style={{width: 80, height: 80, borderRadius: 80, marginVertical: 40}}
        />
        <Button
          rounded
          style={{
            backgroundColor: '#4995be',
            color: '#e6e9ef',
            alignSelf: 'center',
          }}>
          <Text>SET PROFILE PHOTO</Text>
        </Button>
      </View>
      <View
        style={{
          backgroundColor: '#152642',
          paddingVertical: 20,
          marginVertical: 10,
        }}>
        <List>
          <ListItem avatar>
            <Left>
              <Icon
                name="user"
                type="FontAwesome"
                style={{fontSize: 35, color: '#2f4562', width: 35}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Kumar Pratik</Text>
              <Text note style={{color: '#2f4562'}}>
                Name
              </Text>
            </Body>
            <Right style={{borderBottomWidth: 0, justifyContent: 'center'}}>
              <Icon
                name="pencil"
                type="FontAwesome"
                style={{fontSize: 20, color: '#e6e9ef', width: 20}}
              />
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Icon
                name="phone"
                type="FontAwesome"
                style={{fontSize: 35, color: '#2f4562', width: 35}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>+62 85156797295</Text>
              <Text note style={{color: '#2f4562'}}>
                Phone number
              </Text>
            </Body>
            <Right style={{borderBottomWidth: 0, justifyContent: 'center'}}>
              <Icon
                name="pencil"
                type="FontAwesome"
                style={{fontSize: 20, color: '#e6e9ef', width: 20}}
              />
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Icon
                name="at"
                type="FontAwesome"
                style={{fontSize: 35, color: '#2f4562', width: 35}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>@ba_wazieer</Text>
              <Text note style={{color: '#2f4562'}}>
                Username
              </Text>
            </Body>
            <Right style={{borderBottomWidth: 0, justifyContent: 'center'}}>
              <Icon
                name="pencil"
                type="FontAwesome"
                style={{fontSize: 20, color: '#e6e9ef', width: 20}}
              />
            </Right>
          </ListItem>
        </List>
      </View>
      <View
        style={{
          backgroundColor: '#152642',
          height: '100%',
          padding: 10,
        }}>
        <Item style={{marginVertical: 10, borderColor: '#2f4562'}}>
          <Input placeholder="Bio" style={{color: '#e6e9ef'}} />
        </Item>
        <Text note style={{color: '#2f4562'}}>
          Any details such as age, occupation or city, Example: 23 y.o designer
          from San Francisco
        </Text>
      </View>
    </Content>
  );
};

export default Profile;
