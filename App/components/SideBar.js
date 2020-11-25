import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Icon,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Body,
  Thumbnail,
} from 'native-base';

//Actions
import AuthActions from '../redux/actions/auth';

const SideBar = ({navigation}) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: '#152642', flex: 1}}>
      <View style={{backgroundColor: '#62B1F6', paddingVertical: 20}}>
        {profile.isLoading && !profile.isError && <Text>Loading...</Text>}
        {!profile.isLoading && profile.isError && <Text>Error...</Text>}
        {!profile.isLoading &&
          !profile.isError &&
          profile.data.map((item) => (
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={
                      item.photo
                        ? {uri: item.URL_photo}
                        : {
                            uri:
                              'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                          }
                    }
                  />
                </Left>
                <Body style={{borderBottomWidth: 0}}>
                  <Text style={{color: '#e6e9ef'}}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <Text note style={{color: '#e6e9ef'}}>
                    {item.Country.code} {item.phoneNumber}
                  </Text>
                </Body>
                <Right style={{borderBottomWidth: 0}}>
                  <Icon
                    name="bookmark-o"
                    type="FontAwesome"
                    style={{
                      fontSize: 20,
                      color: '#e6e9ef',
                      width: 40,
                      height: 40,
                      backgroundColor: '#152642',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      borderRadius: 35,
                    }}
                  />
                </Right>
              </ListItem>
            </List>
          ))}
      </View>
      <View style={{paddingVertical: 10}}>
        <List>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => navigation.navigate('Contacts')}>
            <Left>
              <Icon
                name="users"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Contacts</Text>
            </Body>
          </ListItem>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => navigation.navigate('Settings')}>
            <Left>
              <Icon
                name="wrench"
                type="FontAwesome"
                style={{fontSize: 30, color: '#2f4562', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#e6e9ef'}}>Settings</Text>
            </Body>
          </ListItem>
          <ListItem
            avatar
            style={{height: 60}}
            onPress={() => dispatch(AuthActions.logout())}>
            <Left>
              <Icon
                name="sign-out"
                type="FontAwesome"
                style={{fontSize: 30, color: '#F01F0E', width: 40}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{color: '#F01F0E'}}>LOGOUT</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default SideBar;
