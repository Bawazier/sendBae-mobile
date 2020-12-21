import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {format} from 'date-fns';
import {Content, Footer, Icon, Input, Item, Text, View} from 'native-base';
import {FlatList, Alert} from 'react-native';
import CardChat from '../components/CardChat';
import ImagePicker from 'react-native-image-picker';

import socket from '../helpers/socket';

//Actions
import MessageActions from '../redux/actions/message';

const ChatRoom = () => {
  const auth = useSelector((state) => state.auth);
  const chatMessage = useSelector((state) => state.chatMessage);
  const message = useSelector((state) => state.message);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MessageActions.getMessage(auth.token, message.recipientId));
    dispatch(MessageActions.getMessageList(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(MessageActions.getMessage(auth.token, message.recipientId));
    dispatch(MessageActions.getMessageList(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const validationSchema = Yup.object({
    phoneNumber: Yup.string(),
  });

  const doRefresh = () => {
    setLoading(true);
    dispatch(MessageActions.getMessage(auth.token, message.recipientId));
    setLoading(false);
  };

  const nextPage = () => {
    if (chatMessage.pageInfo[0].pages > chatMessage.pageInfo[0].currentPage) {
      dispatch(
        MessageActions.getMessageScroll(
          auth.token,
          message.recipientId,
          '',
          chatMessage.pageInfo[0].currentPage + 1,
        ),
      );
    }
  };

  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, async (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.fileSize > 2 * 1024 * 1024) {
        Alert.alert(
          'Image upload failed!',
          'Images should not be more than 2MB',
        );
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        const imageData = new FormData();
        imageData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
          path: response.path,
        });
        await dispatch(
          MessageActions.postMessageImage(
            auth.token,
            message.recipientId,
            imageData,
          ),
        );
        dispatch(MessageActions.getMessage(auth.token, message.recipientId));
      }
    });
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#081b33'}}>
        {chatMessage.isLoading && !chatMessage.isError && (
          <FlatList
            refreshing={loading}
            onRefresh={doRefresh}
            onEndReached={nextPage}
            onEndReachedThreshold={0.5}
            data={chatMessage.data}
            inverted
            renderItem={({item}) => (
              <CardChat
                message={item.Images.length ? false : item.message}
                messageImage={
                  item.Images.length
                    ? item.Images.map((items) => items.image)
                    : false
                }
                messageTime={format(new Date(item.createdAt), 'k.mm aaa')}
                messageColor={
                  item.sender !== auth.decoded.id ? '#152642' : '#2f4562'
                }
                messagePosition={item.sender === auth.decoded.id}
                read={item.read}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {!chatMessage.isLoading && chatMessage.isError && (
          <Text note style={{color: '#F01F0E'}}>
            &nbsp;
          </Text>
        )}
        {!chatMessage.isLoading && !chatMessage.isError && (
          <FlatList
            refreshing={loading}
            onRefresh={doRefresh}
            onEndReached={nextPage}
            onEndReachedThreshold={0.5}
            data={chatMessage.data}
            inverted
            renderItem={({item}) => (
              <CardChat
                message={item.Images.length ? false : item.message}
                messageImage={
                  item.Images.length
                    ? item.Images.map((items) => items.image)
                    : false
                }
                messageTime={format(new Date(item.createdAt), 'k.mm aaa')}
                messageColor={
                  item.sender !== auth.decoded.id ? '#152642' : '#2f4562'
                }
                messagePosition={item.sender === auth.decoded.id}
                read={item.read}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <Formik
        initialValues={{
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
          console.log(message.recipientId);
          const data = {
            message: values.message,
          };
          resetForm('');
          await dispatch(
            MessageActions.postMessage(auth.token, message.recipientId, data),
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          errors,
        }) => (
          <Footer
            style={{
              backgroundColor: '#152642',
              height: 'auto',
            }}>
            <Item
              style={{
                backgroundColor: '#152642',
                width: '100%',
                borderBottomWidth: 0,
                alignItems: 'flex-end',
                marginBottom: 5,
              }}>
              <Icon
                name="paperclip"
                type="FontAwesome"
                onPress={selectImage}
                style={{color: '#767d92', margin: 10}}
              />
              <Input
                name="message"
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
                autoFocus
                multiline
                placeholder="Write a message..."
                style={{color: '#fff'}}
              />
              <Icon
                name="smile-o"
                type="FontAwesome"
                style={{color: '#767d92', margin: 10}}
              />
              <Icon
                name="send"
                type="FontAwesome"
                onPress={handleSubmit}
                title="Submit"
                {...(isSubmitting ? 'disabled' : null)}
                style={{color: '#4995be', margin: 10}}
              />
            </Item>
          </Footer>
        )}
      </Formik>
    </>
  );
};

export default ChatRoom;
