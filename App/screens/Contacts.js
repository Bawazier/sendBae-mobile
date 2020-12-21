/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {format} from 'date-fns';
import {FlatList} from 'react-native';
import {
  Content,
  Header,
  Item,
  Input,
  Icon,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Button,
  Footer,
  FooterTab,
} from 'native-base';
import {REACT_APP_API_URL} from '@env';

//Actions
import ContactActions from '../redux/actions/contact';
import MessageActions from '../redux/actions/message';
import ProfileActions from '../redux/actions/profile';

import ContactDialog from '../components/ContactDialog';

const Contacts = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dataContact = useSelector((state) => state.dataContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ContactActions.getContact(auth.token));
  }, []);

  const handlePressList = (id) => {
    dispatch(MessageActions.getRecipiendId(id));
    dispatch(MessageActions.getMessage(auth.token, id));
    dispatch(ProfileActions.getProfileId(auth.token, id));
    navigation.navigate('ChatRoom');
  };

  return (
    <>
      <Header
        span
        style={{
          backgroundColor: '#152642',
          borderBottomWidth: 0.5,
          borderBottomColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Body>
          <Item style={{backgroundColor: '#152642', borderBottomWidth: 0}}>
            <Icon
              name="search"
              type="FontAwesome"
              style={{color: '#2f4562', fontSize: 15}}
            />
            <Input
              onChangeText={(text) =>
                dispatch(ContactActions.getContact(auth.token, text))
              }
              placeholder="Search"
              style={{color: '#e6e9ef', fontSize: 15}}
            />
          </Item>
        </Body>
      </Header>
      <Content style={{backgroundColor: '#152642'}}>
        {!dataContact.isLoading && dataContact.isError && (
          <Text note style={{color: '#F01F0E'}}>
            &nbsp;
          </Text>
        )}
        {!dataContact.isLoading && !dataContact.isError && (
          <FlatList
            data={dataContact.data}
            renderItem={({item}) => (
              <ListItem avatar onPress={() => handlePressList(item.User.id)}>
                <Left>
                  <Thumbnail
                    source={
                      item.User.photo
                        ? {
                            uri: REACT_APP_API_URL + item.User.photo,
                          }
                        : {
                            uri:
                              'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                          }
                    }
                  />
                </Left>
                <Body style={{borderBottomWidth: 0}}>
                  <Text style={{color: '#e6e9ef'}}>
                    {item.firstName || 'Anonym'} {item.lastName}
                  </Text>
                  <Text note style={{color: '#2f4562'}}>
                    last seen {format(new Date(item.createdAt), 'BBBB kk.mm a')}
                  </Text>
                </Body>
              </ListItem>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
        <ContactDialog
          visible={modalVisible}
          handleCancel={() => setModalVisible(!modalVisible)}
        />
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={{backgroundColor: '#152642'}}
            onPress={() => setModalVisible(true)}>
            <Text style={{fontSize: 15, color: '#4995be'}}>ADD CONTACT</Text>
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};

export default Contacts;
