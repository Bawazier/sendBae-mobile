/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import ChangeNameDialog from '../components/ChangeNameDialog';
import ChangePhoneDialog from '../components/ChangePhoneDialog';
import ChangeUsernameDialog from '../components/ChangeUsernameDialog';

//Actions
import ProfileActions from '../redux/actions/profile';

const Profile = () => {
  const [changeName, setChangeName] = useState(false);
  const [changePhone, setChangePhone] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dataProfile = useSelector((state) => state.dataProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.isLoading && !auth.isError && auth.tokenTemporary) {
      dispatch(ProfileActions.getProfile(auth.tokenTemporary));
      console.log(auth.tokenTemporary);
    }
  }, []);

  const validationSchema = Yup.object({
    bio: Yup.string(),
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
        imageData.append('photo', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
          path: response.path,
        });
        console.log(imageData);
        await dispatch(
          ProfileActions.patchProfileImage(
            auth.token || auth.tokenTemporary,
            imageData,
          ),
        );
        return dispatch(
          ProfileActions.getProfile(auth.token || auth.tokenTemporary),
        );
      }
    });
  };

  return (
    <>
      {!dataProfile.isLoading &&
        !dataProfile.isError &&
        dataProfile.data.map((item) => (
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
                source={
                  item.photo
                    ? {
                        uri: item.URL_photo,
                      }
                    : {
                        uri:
                          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                      }
                }
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginVertical: 20,
                }}
              />
              <Button
                rounded
                onPress={selectImage}
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
                    <Text style={{color: '#e6e9ef'}}>
                      {item.firstName || 'Please change'}{' '}
                      {item.lastName || 'Your Name'}
                    </Text>
                    <Text note style={{color: '#2f4562'}}>
                      Name
                    </Text>
                  </Body>
                  <Right
                    style={{borderBottomWidth: 0, justifyContent: 'center'}}>
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
                    <Text style={{color: '#e6e9ef'}}>
                      {item.Country.code || 'Your'}{' '}
                      {item.phoneNumber || 'Number'}
                    </Text>
                    <Text note style={{color: '#2f4562'}}>
                      Phone number
                    </Text>
                  </Body>
                  <Right
                    style={{borderBottomWidth: 0, justifyContent: 'center'}}>
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
                    <Text style={{color: '#e6e9ef'}}>
                      {item.username || 'Please change Your Username'}
                    </Text>
                    <Text note style={{color: '#2f4562'}}>
                      Username
                    </Text>
                  </Body>
                  <Right
                    style={{borderBottomWidth: 0, justifyContent: 'center'}}>
                    <Icon
                      name="pencil"
                      type="FontAwesome"
                      style={{fontSize: 20, color: '#e6e9ef', width: 20}}
                    />
                  </Right>
                </ListItem>
              </List>
            </View>
            <Formik
              initialValues={{
                bio: item.bio || '',
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                const data = {
                  bio: values.bio,
                };
                console.log(data);
                await dispatch(
                  ProfileActions.patchProfile(
                    auth.token || auth.tokenTemporary,
                    data,
                  ),
                );
                dispatch(
                  ProfileActions.getProfile(auth.token || auth.tokenTemporary),
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
                <View
                  style={{
                    backgroundColor: '#152642',
                    height: '100%',
                    padding: 10,
                  }}>
                  <Item style={{marginVertical: 10, borderColor: '#2f4562'}}>
                    <Input
                      name="bio"
                      onChangeText={handleChange('bio')}
                      onBlur={handleBlur('bio')}
                      value={values.bio}
                      onSubmitEditing={handleSubmit}
                      placeholder="Bio"
                      style={{color: '#e6e9ef'}}
                    />
                  </Item>
                  <Text note style={{color: '#2f4562'}}>
                    Any details such as age, occupation or city, Example: 23 y.o
                    designer from San Francisco
                  </Text>
                </View>
              )}
            </Formik>
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
        ))}
    </>
  );
};

export default Profile;
