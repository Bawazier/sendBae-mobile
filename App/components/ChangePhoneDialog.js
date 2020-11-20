import React from 'react';
import Dialog from 'react-native-dialog';
import {View, Form, Item, Input, Label, Text} from 'native-base';

const ChangePhoneDialog = (props) => {
  return (
    <View>
      <Dialog.Container
        visible={props.visible}
        contentStyle={{backgroundColor: '#152642'}}>
        <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
          Edit your phone number
        </Dialog.Title>
        <Form>
          <Item stackedLabel style={{borderBottomColor: '#2f4562'}}>
            <Label style={{color: '#2f4562'}}>Enter new number</Label>
            <Input />
          </Item>
        </Form>
        <Text
          note
          style={{color: '#2f4562', marginHorizontal: 10, marginTop: 40}}>
          We will send an SMS with a confirmation code to your new number
        </Text>
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

export default ChangePhoneDialog;
