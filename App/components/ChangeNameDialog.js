import React from 'react';
import Dialog from 'react-native-dialog';
import {View, Form, Item, Input, Label} from 'native-base';

const ChangeNameDialog = (props) => {
  return (
    <View>
      <Dialog.Container
        visible={props.visible}
        contentStyle={{backgroundColor: '#152642'}}>
        <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
          Edit your name
        </Dialog.Title>
        <Form>
          <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
            <Label style={{color: '#2f4562'}}>First Name</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
            <Label style={{color: '#2f4562'}}>Last Name</Label>
            <Input />
          </Item>
        </Form>
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

export default ChangeNameDialog;
