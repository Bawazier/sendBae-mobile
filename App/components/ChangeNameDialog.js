import React from 'react';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, Form, Item, Input, Label} from 'native-base';

//Actions
import ProfileActions from '../redux/actions/profile';

const ChangeNameDialog = (props) => {
  const auth = useSelector((state) => state.auth);
  const dataProfile = useSelector((state) => state.dataProfile);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string().max(80).required(),
    lastName: Yup.string().max(80).required(),
  });

  return (
    <Formik
      initialValues={{
        firstName: dataProfile.data[0].firstName || '',
        lastName: dataProfile.data[0].lastName || '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
        };
        console.log(data);
        await dispatch(ProfileActions.patchProfile(auth.token, data));
        dispatch(ProfileActions.getProfile(auth.token));
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
              Edit your name
            </Dialog.Title>

            <Form>
              <Item stackedLabel style={{borderBottomColor: '#2f4562'}}>
                <Label style={{color: '#2f4562'}}>First Name</Label>
                <Input
                  name="firstName"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  style={{color: '#e6e9ef'}}
                />
              </Item>
              <Item stackedLabel style={{borderBottomColor: '#2f4562'}}>
                <Label style={{color: '#2f4562'}}>Last Name</Label>
                <Input
                  name="lastName"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  style={{color: '#e6e9ef'}}
                />
              </Item>
            </Form>

            <Dialog.Button
              label="CANCEL"
              onPress={props.handleCancel}
              color="#62B1F6"
            />
            <Dialog.Button
              label="CREATE"
              color="#62B1F6"
              onTouchEnd={props.handleCancel}
              onPress={handleSubmit}
              title="Submit"
              {...(isSubmitting ? 'disabled' : null)}
            />
          </Dialog.Container>
        </View>
      )}
    </Formik>
  );
};

export default ChangeNameDialog;
