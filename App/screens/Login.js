import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, Text, Button, Item, Input, Form} from 'native-base';

import {useNavigation} from '@react-navigation/native';

//Components
import CountryDialog from '../components/CountryDialog';

//Actions
import AuthActions from '../redux/actions/auth';
import CountryActions from '../redux/actions/country';

const Login = () => {
  const [selectCountry, setSelectCountry] = useState(false);
  const [countryName, setCountryName] = useState('Indonesia');
  const [countryCode, setCountryCode] = useState('+62');
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validationSchema = Yup.object({
    phoneNumber: Yup.number()
      .integer('Invalid phone number. Please try again.')
      .min(1000000000, 'Invalid phone number. Please try again.')
      .max(99999999999, 'Invalid phone number. Please try again.'),
  });

  const onSelectCountry = async () => {
    await dispatch(CountryActions.getCountry());
    setSelectCountry(true);
  };

  const handleCancel = async () => {
    await setSelectCountry(!selectCountry);
  };

  const handleSelect = async (id) => {
    await dispatch(CountryActions.getCountryId(id));
    setSelectCountry(!selectCountry);
    setCountryName(country.dataId.name);
    setCountryCode(country.dataId.code);
  };

  return (
    <Formik
      initialValues={{
        countryName: countryName,
        countryCode: countryCode,
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const data = {
          countryId: country.dataId.id || 1,
          phoneNumber: values.phoneNumber,
        };
        dispatch(AuthActions.login(data));
        // navigation.navigate('Profile');
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
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#152642',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              margin: 40,
            }}>
            <Text style={{color: '#e6e9ef', fontSize: 25, marginVertical: 10}}>
              Your Phone Number
            </Text>
            <Text style={{color: '#2f4562', fontSize: 15}}>
              Please confirm your country code and enter your mobile phone
              number
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              margin: 40,
            }}>
            <Form>
              <Item
                style={{width: '100%', borderColor: '#2f4562'}}
                onPress={onSelectCountry}>
                <Input
                  name="countryName"
                  value={countryName}
                  disabled
                  style={{textAlign: 'left', color: '#e6e9ef'}}
                />
              </Item>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginLeft: 15,
                }}>
                <Item style={{width: '20%', borderColor: '#2f4562'}}>
                  <Input
                    name="countryCode"
                    value={countryCode}
                    disabled
                    style={{textAlign: 'center', color: '#e6e9ef'}}
                  />
                </Item>
                <Item
                  style={{
                    width: '75%',
                    borderColor: errors.phoneNumber ? '#F01F0E' : '#4995be',
                  }}>
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
              </View>
              {!touched.phoneNumber && errors.phoneNumber && (
                <Text
                  style={{color: '#2f4562', fontSize: 15, textAlign: 'center'}}>
                  {errors.phoneNumber}
                </Text>
              )}
            </Form>
          </View>
          <View style={{width: '100%', paddingHorizontal: 35}}>
            <Button
              full
              style={{backgroundColor: '#4995be', color: '#e6e9ef'}}
              onPress={handleSubmit}
              title="Submit"
              {...(isSubmitting ? 'disabled' : null)}>
              <Text>NEXT</Text>
            </Button>
          </View>
          <CountryDialog
            visible={selectCountry}
            handleCancel={handleCancel}
            handleSelect={handleSelect}
          />
        </View>
      )}
    </Formik>
  );
};

export default Login;
