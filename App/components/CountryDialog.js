/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useSelector} from 'react-redux';
import Dialog from 'react-native-dialog';
import {View, List, ListItem, Left, Body, Text} from 'native-base';
import {FlatList} from 'react-native';

const CountryDialog = (props) => {
  const country = useSelector((state) => state.country);

  return (
    <View>
      <Dialog.Container
        visible={props.visible}
        contentStyle={{backgroundColor: '#152642'}}>
        <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
          Select Country
        </Dialog.Title>
        <FlatList
          data={country.data}
          renderItem={({item}) => (
            <ListItem
              style={{borderBottomWidth: 0}}
              onPress={() => props.handleSelect(item.id)}>
              <Left>
                <Text style={{color: '#e6e9ef'}}>{item.name}</Text>
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{color: '#2f4562'}}>{item.code}</Text>
              </Body>
            </ListItem>
          )}
          keyExtractor={(item) => item.id}
        />
        <Dialog.Button
          label="CLOSE"
          onPress={props.handleCancel}
          color="#62B1F6"
        />
      </Dialog.Container>
    </View>
  );
};

export default CountryDialog;
