import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {format} from 'date-fns';
import {Content, Footer, Icon, Input, Item, Text} from 'native-base';
import {FlatList} from 'react-native';
import CardChat from '../components/CardChat';
import ImagePicker from 'react-native-image-picker';

//Actions
import MessageActions from '../redux/actions/message';

const ChatRoom = () => {
  const auth = useSelector((state) => state.auth);
  const chatMessage = useSelector((state) => state.chatMessage);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    phoneNumber: Yup.string(),
  });

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
      <Content style={{backgroundColor: '#081b33'}}>
        {chatMessage.isLoading && !chatMessage.isError && (
          <FlatList
            data={chatMessage.data}
            inverted
            renderItem={({item}) => (
              <CardChat
                message={item.Images.length ? false : item.message}
                messageImage={
                  item.Images.length
                    ? item.Images.map((item) => item.image)
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
            keyExtractor={(item) => item.id}
          />
        )}
        {!chatMessage.isLoading && chatMessage.isError && (
          <Text note style={{color: '#F01F0E'}}>
            &nbsp;
          </Text>
        )}
        {!chatMessage.isLoading && !chatMessage.isError && (
          <FlatList
            data={chatMessage.data}
            inverted
            renderItem={({item}) => (
              <CardChat
                message={item.Images.length ? false : item.message}
                messageImage={
                  item.Images.length
                    ? item.Images.map((item) => item.image)
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
            keyExtractor={(item) => item.id}
          />
        )}
      </Content>
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
          dispatch(MessageActions.getMessage(auth.token, message.recipientId));
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
