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
  View,
} from 'native-base';
import {REACT_APP_API_URL} from '@env';

import socket from '../helpers/socket';

//Actions
import MessageActions from '../redux/actions/message';
import ProfileActions from '../redux/actions/profile';

const ChatList = ({navigation}) => {
  const auth = useSelector((state) => state.auth);
  const message = useSelector((state) => state.listMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileActions.getProfile(auth.token));
    // const readEvent = auth.decoded.id;
    const sendEvent = auth.decoded.id;
    dispatch(MessageActions.getMessageList(auth.token));
    socket.on(sendEvent.toString(), ({sender, messages, senderData}) => {
      console.log('theres an event');
      console.log(messages);
      dispatch(MessageActions.getMessage(auth.token, sender));
      dispatch(MessageActions.getMessageList(auth.token));
      console.log(senderData);
      console.log(messages);
    });
    // socket.on(readEvent, ({reciever, read}) => {
    //   dispatch(MessageActions.getMessageList(auth.token));
    // });
    return () => {
      socket.close();
    };
  }, []);

  const handlePressList = async (id) => {
    await dispatch(ProfileActions.getProfileId(auth.token, id));
    await dispatch(MessageActions.getRecipiendId(id));
    navigation.navigate('ChatRoom');
  };

  const [loading, setLoading] = React.useState(false);
  const doRefresh = () => {
    setLoading(true);
    dispatch(MessageActions.getMessageList(auth.token));
    setLoading(false);
  };

  const nextPage = () => {
    if (message.pageInfo[0].pages > message.pageInfo[0].currentPage) {
      dispatch(
        MessageActions.getMessageListScroll(
          auth.token,
          '',
          message.pageInfo[0].currentPage + 1,
        ),
      );
    }
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
        {/* {!message.isLoading && message.isError && (
          <View>
            <Text>Welcome to Send Bae App</Text>
            <Text>Please add a friendship contact to start a chat</Text>
          </View>
        )} */}
        {!message.isLoading && !message.isError && (
          <FlatList
            refreshing={loading}
            onRefresh={doRefresh}
            onEndReached={nextPage}
            onEndReachedThreshold={0.5}
            data={message.data}
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
                                uri:
                                  REACT_APP_API_URL + item.userRecipient.photo,
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
                        {item.message.length < 40
                          ? item.message
                          : item.message.slice(0, 40).concat('...')}
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
                                uri: REACT_APP_API_URL + item.userSender.photo,
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
                        {item.message.length < 40
                          ? item.message
                          : item.message.slice(0, 40).concat('...')}
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
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </Content>
    </>
  );
};

export default ChatList;
