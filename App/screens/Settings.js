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

const Settings = ({navigation}) => {
  return (
    <Content
      style={{
        backgroundColor: '#2f4562',
      }}>
      <View
        style={{
          backgroundColor: '#152642',
          paddingTop: 60,
          paddingVertical: 20,
          marginBottom: 10,
        }}>
        <List>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                }}
                style={{width: 80, height: 80, borderRadius: 80}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Kumar Pratik</Text>
              <Text note style={{color: '#2f4562'}}>
                last seen today at 9:06 PM
              </Text>
            </Body>
          </ListItem>
        </List>
      </View>
      <View
        style={{
          backgroundColor: '#152642',
          paddingVertical: 20,
          marginBottom: 10,
        }}>
        <List>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => navigation.navigate('Profile')}>
            <Left>
              <Icon
                name="info-circle"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Edit profile</Text>
            </Body>
          </ListItem>
          <ListItem avatar style={{height: 60}}>
            <Left>
              <Icon
                name="bell-o"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Notifications</Text>
            </Body>
          </ListItem>
        </List>
      </View>
      <View
        style={{
          backgroundColor: '#152642',
          paddingVertical: 10,
        }}>
        <List>
          <ListItem avatar style={{height: 60}}>
            <Left>
              <Icon
                name="question-circle-o"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>SendBae FAQ</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    </Content>
  );
};

export default Settings;
