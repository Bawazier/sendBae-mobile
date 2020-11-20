import React from 'react';
import Dialog from 'react-native-dialog';
import {
  View,
  Text,
  Body,
  ListItem,
  Left,
  Icon,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

const ContactDialog = (props) => {
  return (
    <View>
      <Dialog.Container
        visible={props.visible}
        contentStyle={{backgroundColor: '#152642'}}>
        <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
          New Contact
        </Dialog.Title>
        <ListItem avatar style={{height: 60, marginVertical: 10}}>
          <Left>
            <Icon
              name="user"
              type="FontAwesome"
              style={{fontSize: 30, color: '#2f4562', width: 40}}
            />
          </Left>
          <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
            <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
              <Label style={{color: '#2f4562'}}>First Name</Label>
              <Input />
            </Item>
          </Body>
        </ListItem>
        <ListItem avatar style={{height: 60, marginVertical: 10}}>
          <Left style={{width: 40}} />
          <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
            <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
              <Label style={{color: '#2f4562'}}>Last Name</Label>
              <Input />
            </Item>
          </Body>
        </ListItem>
        <ListItem avatar style={{height: 60, marginVertical: 10}}>
          <Left>
            <Icon
              name="phone"
              type="FontAwesome"
              style={{fontSize: 30, color: '#2f4562', width: 30}}
            />
          </Left>
          <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
            <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
              <Label style={{color: '#2f4562'}}>Phone Number</Label>
              <Input />
            </Item>
          </Body>
        </ListItem>
        <Dialog.Button
          label="CANCEL"
          onPress={props.handleCancel}
          color="#62B1F6"
        />
        <Dialog.Button
          label="CREATE"
          onPress={props.handleCreate}
          color="#62B1F6"
        />
      </Dialog.Container>
    </View>
  );
};

export default ContactDialog;
