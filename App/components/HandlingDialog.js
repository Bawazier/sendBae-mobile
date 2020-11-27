/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Dialog from 'react-native-dialog';
import {View, Spinner} from 'native-base';

const HandlingDialog = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <View>
      <Dialog.Container
        visible={true || toggle}
        contentStyle={{backgroundColor: '#152642'}}>
        {props.isError ? (
          <View>
            <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
              {props.errorMessage}
            </Dialog.Title>
            <Dialog.Description>
              Sorry there is a problem with the system, please check your
              request again
            </Dialog.Description>
            <Dialog.Button
              label="CLOSE"
              onPress={setToggle(!toggle)}
              color="#62B1F6"
            />
          </View>
        ) : (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Spinner color="red" style={{fontSize: 50}} />
          </View>
        )}
      </Dialog.Container>
    </View>
  );
};

export default HandlingDialog;
