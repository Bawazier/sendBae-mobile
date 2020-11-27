import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Dialog from 'react-native-dialog';
import {View, Form, Item, Input, Label, Text} from 'native-base';

//Actions
import ProfileActions from '../redux/actions/profile';

const ChangePhoneDialog = (props) => {
  const auth = useSelector((state) => state.auth);
  const dataProfile = useSelector((state) => state.dataProfile);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    phoneNumber: Yup.number()
      .integer('Invalid phone number. Please try again.')
      .min(1000000000, 'Invalid phone number. Please try again.')
      .max(99999999999, 'Invalid phone number. Please try again.')
      .required(),
  });

  return (
    <Formik
      initialValues={{
        phoneNumber: parseInt(dataProfile.data[0].phoneNumber),
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = {
          countryId: dataProfile.data[0].Country.id,
          phoneNumber: values.phoneNumber,
        };
        console.log(data);
        await dispatch(
          ProfileActions.putPhoneNumber(
            auth.token || auth.tokenTemporary,
            data,
          ),
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
              Edit your phone number
            </Dialog.Title>
            <Form>
              <Item
                stackedLabel
                style={{
                  borderBottomColor: errors.phoneNumber ? '#F01F0E' : '#4995be',
                }}>
                <Label style={{color: '#2f4562'}}>Enter new number</Label>
                <Input
                  name="phoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  autoFocus
                  style={{color: '#e6e9ef'}}
                />
              </Item>
              {!touched.phoneNumber && errors.phoneNumber && (
                <Text
                  style={{color: '#2f4562', fontSize: 15, textAlign: 'center'}}>
                  {errors.phoneNumber}
                </Text>
              )}
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

export default ChangePhoneDialog;
