import React from 'react';
import Dialog from 'react-native-dialog';
import {View, Form, Item, Input, Label, Text} from 'native-base';

const ChangeUsername = (props) => {
  return (
    <View>
      <Dialog.Container
        visible={props.visible}
        contentStyle={{backgroundColor: '#152642'}}>
        <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
          Username
        </Dialog.Title>
        <Form>
          <Item floatingLabel style={{borderBottomColor: '#2f4562'}}>
            <Label style={{color: '#2f4562'}}>@username</Label>
            <Input />
          </Item>
        </Form>
        <Text note style={{color: '#fff', marginHorizontal: 10, marginTop: 40}}>
          You can use a-z, 0-9 and underscores. Minimum length is 5 characters
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

export default ChangeUsername;
