import React, {useState} from 'react';
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

import ChangeNameDialog from '../components/ChangeNameDialog';
import ChangePhoneDialog from '../components/ChangePhoneDialog';
import ChangeUsernameDialog from '../components/ChangeUsernameDialog';

const Profile = () => {
  const [changeName, setChangeName] = useState(false);
  const [changePhone, setChangePhone] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);
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
          style={{width: 100, height: 100, borderRadius: 100, marginVertical: 20}}
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
          <ListItem avatar onPress={() => setChangeName(true)}>
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
          <ListItem avatar onPress={() => setChangePhone(true)}>
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
          <ListItem avatar onPress={() => setChangeUsername(true)}>
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
      <ChangeNameDialog
        visible={changeName}
        handleCancel={() => setChangeName(!changeName)}
      />
      <ChangePhoneDialog
        visible={changePhone}
        handleCancel={() => setChangePhone(!changePhone)}
      />
      <ChangeUsernameDialog
        visible={changeUsername}
        handleCancel={() => setChangeUsername(!changeUsername)}
      />
    </Content>
  );
};

export default Profile;
