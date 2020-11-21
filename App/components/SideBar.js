import React from 'react';
import {
  View,
  Icon,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
} from 'native-base';

const SideBar = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#152642', flex: 1}}>
      <View style={{backgroundColor: '#62B1F6', paddingVertical: 20}}>
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
              <Text note style={{color: '#e6e9ef'}}>
                +62 85156797295
              </Text>
            </Body>
            <Right style={{borderBottomWidth: 0}}>
              <Icon
                name="bookmark-o"
                type="FontAwesome"
                style={{
                  fontSize: 20,
                  color: '#e6e9ef',
                  width: 40,
                  height: 40,
                  backgroundColor: '#152642',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  borderRadius: 35,
                }}
              />
            </Right>
          </ListItem>
        </List>
      </View>
      <View style={{paddingVertical: 10}}>
        <List>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => navigation.navigate('Contacts')}>
            <Left>
              <Icon
                name="users"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Contacts</Text>
            </Body>
          </ListItem>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => navigation.navigate('Settings')}>
            <Left>
              <Icon
                name="wrench"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Settings</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default SideBar;