import React from 'react';
import Dialog from 'react-native-dialog';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  Text,
  Body,
  ListItem,
  Left,
  Icon,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

//Actions
import ContactActions from '../redux/actions/contact';

const ContactDialog = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string().max(80).required(),
    lastName: Yup.string().max(80).required(),
    phoneNumber: Yup.number()
      .integer('Invalid phone number. Please try again.')
      .min(1000000000, 'Invalid phone number. Please try again.')
      .max(99999999999, 'Invalid phone number. Please try again.')
      .required(),
  });
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          countryId: 1,
          phoneNumber: values.phoneNumber,
        };
        console.log(data);
        await dispatch(ContactActions.postContact(auth.token, data));
        dispatch(ContactActions.getContact(auth.token));
        return () => props.handleCancel;
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
              New Contact
            </Dialog.Title>
            <ListItem avatar style={{height: 60, marginVertical: 10}}>
              <Left>
                <Icon
                  name="user"
                  type="FontAwesome"
                  style={{fontSize: 30, color: '#2f4562', width: 40}}
                />
              </Left>
              <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
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
              </Body>
            </ListItem>
            <ListItem avatar style={{height: 60, marginVertical: 10}}>
              <Left style={{width: 40}} />
              <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
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
              </Body>
            </ListItem>
            <ListItem avatar style={{height: 60, marginVertical: 10}}>
              <Left>
                <Icon
                  name="phone"
                  type="FontAwesome"
                  style={{fontSize: 30, color: '#2f4562', width: 30}}
                />
              </Left>
              <Body style={{borderBottomWidth: 0, alignSelf: 'flex-end'}}>
                <Item
                  stackedLabel
                  style={{
                    borderBottomColor: errors.phoneNumber
                      ? '#F01F0E'
                      : '#2f4562',
                  }}>
                  <Label style={{color: '#2f4562'}}>Phone Number</Label>
                  <Input
                    name="phoneNumber"
                    keyboardType="phone-pad"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    style={{color: '#e6e9ef'}}
                  />
                </Item>
              </Body>
            </ListItem>
            {!touched.phoneNumber && errors.phoneNumber && (
              <Text
                style={{
                  color: '#F01F0E',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                {errors.phoneNumber}
              </Text>
            )}
            <Dialog.Button
              label="CANCEL"
              onPress={props.handleCancel}
              color="#62B1F6"
            />
            <Dialog.Button
              label="CREATE"
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

export default ContactDialog;
