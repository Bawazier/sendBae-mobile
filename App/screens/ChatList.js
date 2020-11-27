/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
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
  Right,
  Thumbnail,
  Badge,
} from 'native-base';
import {API_URL} from '@env';

//Actions
import MessageActions from '../redux/actions/message';
import ProfileActions from '../redux/actions/profile';

const ChatList = ({navigation}) => {
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.listMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileActions.getProfile(auth.token));
    dispatch(MessageActions.getMessageList(auth.token));
  }, []);

  const handlePressList = async (id) => {
    dispatch(MessageActions.getRecipiendId(id));
    await dispatch(MessageActions.getMessage(auth.token, id));
    // await dispatch(ProfileActions.getProfileId(auth.token, parseInt(id)));
    navigation.navigate('ChatRoom');
  };

  return (
    <>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: '#081b33',
          borderBottomColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="navicon"
          type="FontAwesome"
          style={{color: '#767d92', marginRight: 15, fontSize: 25}}
          onPress={() => navigation.openDrawer()}
        />
        <Item style={{backgroundColor: '#152642'}}>
          <Icon
            name="search"
            type="FontAwesome"
            style={{color: '#2f4562', fontSize: 15}}
          />
          <Input
            onChangeText={(text) =>
              dispatch(MessageActions.getMessageList(auth.token, text))
            }
            placeholder="Search"
            style={{color: '#e6e9ef', fontSize: 15}}
          />
        </Item>
      </Header>
      <Content style={{backgroundColor: '#081b33'}}>
        {message.isLoading && !message.isError && (
          <Text note style={{color: '#767d92'}}>
            Loading....
          </Text>
        )}
        {!message.isLoading && message.isError && (
          <Text note style={{color: '#F01F0E'}}>
            &nbsp;
          </Text>
        )}
        {!message.isLoading && !message.isError && (
          <FlatList
            data={message.data}
            refreshing={false}
            onRefresh={() =>
              dispatch(MessageActions.getMessageList(auth.token))
            }
            renderItem={({item}) => (
              <>
                {auth.decoded.id === item.sender && (
                  <ListItem
                    avatar
                    onPress={() => handlePressList(item.recipient)}>
                    <Left>
                      <Thumbnail
                        source={
                          item.userRecipient.photo
                            ? {
                                uri: API_URL + item.userRecipient.photo,
                              }
                            : {
                                uri:
                                  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                              }
                        }
                      />
                    </Left>
                    <Body
                      style={{borderBottomWidth: 0, alignSelf: 'flex-start'}}>
                      <Text style={{color: '#e6e9ef'}}>
                        {item.userRecipient.firstName || 'Anonym'}{' '}
                        {item.userRecipient.lastName || 'User'}
                      </Text>
                      <Text note style={{color: '#767d92'}}>
                        {item.message.length < 30
                          ? item.message
                          : item.message.slice(0, 30).concat('...')}
                      </Text>
                    </Body>
                    <Right style={{borderBottomWidth: 0}}>
                      <Text note style={{color: '#767d92'}}>
                        {format(new Date(item.createdAt), 'k.mm.s aaa')}
                      </Text>
                      {/* {item.read ? null : (
                        <Badge info style={{marginVertical: 10}}>
                          <Text>'1'</Text>
                        </Badge>
                      )} */}
                    </Right>
                  </ListItem>
                )}
                {auth.decoded.id !== item.sender && (
                  <ListItem avatar onPress={() => handlePressList(item.sender)}>
                    <Left>
                      <Thumbnail
                        source={
                          item.userSender.photo
                            ? {
                                uri: API_URL + item.userSender.photo,
                              }
                            : {
                                uri:
                                  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                              }
                        }
                      />
                    </Left>
                    <Body
                      style={{borderBottomWidth: 0, alignSelf: 'flex-start'}}>
                      <Text style={{color: '#e6e9ef'}}>
                        {item.userSender.firstName || 'Anonym'}{' '}
                        {item.userSender.lastName || 'User'}
                      </Text>
                      <Text note style={{color: '#767d92'}}>
                        {item.message.length < 20
                          ? item.message
                          : item.message.slice(0, 20).concat('...')}
                      </Text>
                    </Body>
                    <Right style={{borderBottomWidth: 0}}>
                      <Text note style={{color: '#767d92'}}>
                        {format(new Date(item.createdAt), 'k.mm.s aaa')}
                      </Text>
                      {item.read ? null : (
                        <Badge info style={{marginVertical: 10}}>
                          <Text>1</Text>
                        </Badge>
                      )}
                    </Right>
                  </ListItem>
                )}
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </Content>
    </>
  );
};

export default ChatList;
