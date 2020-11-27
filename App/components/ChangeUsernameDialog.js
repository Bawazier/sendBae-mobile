import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Dialog from 'react-native-dialog';
import {View, Form, Item, Input, Label, Text} from 'native-base';

//Actions
import ProfileActions from '../redux/actions/profile';

const ChangeUsername = (props) => {
  const auth = useSelector((state) => state.auth);
  const dataProfile = useSelector((state) => state.dataProfile);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string()
      .lowercase()
      .matches(new RegExp('^[a-z0-9]{3,30}$'))
      .min(5),
  });

  return (
    <Formik
      initialValues={{
        username: dataProfile.data[0].username || '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = {
          username: values.username,
        };
        console.log(data);
        await dispatch(
          ProfileActions.patchProfile(auth.token || auth.tokenTemporary, data),
        );
        dispatch(ProfileActions.getProfile(auth.token || auth.tokenTemporary));
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
        <View>
          <Dialog.Container
            visible={props.visible}
            contentStyle={{backgroundColor: '#152642'}}>
            <Dialog.Title style={{color: '#e6e9ef', fontSize: 20}}>
              Username
            </Dialog.Title>
            <Form>
              <Item
                stackedLabel
                style={{
                  borderBottomColor: errors.phoneNumber ? '#F01F0E' : '#4995be',
                }}>
                <Label style={{color: '#2f4562'}}>@username</Label>
                <Input
                  name="username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  autoFocus
                  style={{color: '#e6e9ef'}}
                />
              </Item>
              {!touched.username && errors.username && (
                <Text
                  style={{color: '#2f4562', fontSize: 15, textAlign: 'center'}}>
                  {errors.username}
                </Text>
              )}
            </Form>
            <Text
              note
              style={{color: '#fff', marginHorizontal: 10, marginTop: 40}}>
              You can use a-z, 0-9 and underscores. Minimum length is 5
              characters
            </Text>
            <Dialog.Button
              label="CANCEL"
              onPress={props.handleCancel}
              color="#62B1F6"
            />
            <Dialog.Button
              label="CREATE"
              onTouchEnd={props.handleCancel}
              onPress={handleSubmit}
              title="Submit"
              {...(isSubmitting ? 'disabled' : null)}
              color="#62B1F6"
            />
          </Dialog.Container>
        </View>
      )}
    </Formik>
  );
};

export default ChangeUsername;
