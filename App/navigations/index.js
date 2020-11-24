import React from 'react';
import {useSelector} from 'react-redux';

import Main from '../screens/Main';
import Login from '../screens/Login';
import ChatList from '../screens/ChatList';
import ChatRoom from '../screens/ChatRoom';
import Settings from '../screens/Settings';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';

import {
  Button,
  Text,
  Icon,
  List,
  ListItem,
  Left,
  Body,
  Picker,
  Thumbnail,
} from 'native-base';

import SideBar from '../components/SideBar';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
          cardShadowEnabled: false,
          headerTintColor: '#2f4562',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          cardShadowEnabled: false,
          headerStyle: {backgroundColor: '#152642', height: 50},
          headerLeft: () => <Text>&nbsp;</Text>,
          headerRight: () => (
            <Button info style={{color: '#fff', width: 150, height: 50}}>
              <Text>START</Text>
              <Icon name="long-arrow-right" type="FontAwesome" />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerStyle: {backgroundColor: '#152642'},
          cardShadowEnabled: false,
          headerTintColor: '#2f4562',
          headerRightContainerStyle: {marginHorizontal: 25},
          headerTitleStyle: {marginHorizontal: -10},
          headerTitleContainerStyle: {marginLeft: -35},
          headerTitle: () => (
            <List style={{}}>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                    }}
                    style={{width: 40, height: 40}}
                  />
                </Left>
                <Body style={{borderBottomWidth: 0}}>
                  <Text style={{color: '#e6e9ef'}}>Kumar Pratik</Text>
                  <Text note style={{color: '#2f4562'}}>
                    last seen 12.11.20
                  </Text>
                </Body>
              </ListItem>
            </List>
          ),
          headerRight: () => (
            <Icon
              name="ellipsis-v"
              type="FontAwesome"
              style={{color: '#2f4562', fontSize: 25}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const SettingStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {backgroundColor: '#152642'},
          cardShadowEnabled: false,
          headerTintColor: '#2f4562',
          headerRightContainerStyle: {marginHorizontal: 25},
          headerLeftContainerStyle: {marginHorizontal: 20},
          headerTransparent: true,
          headerLeft: () => (
            <Icon
              name="long-arrow-left"
              type="FontAwesome"
              style={{color: '#2f4562'}}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: () => (
            <Text style={{color: '#fff', fontSize: 24}}>Settings</Text>
          ),
          headerRight: () => (
            <Icon
              name="ellipsis-v"
              type="FontAwesome"
              style={{color: '#2f4562', fontSize: 25}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: '#152642'},
          cardShadowEnabled: false,
          headerTintColor: '#2f4562',
          headerTitle: () => <Text style={{color: '#fff'}}>Info</Text>,
        }}
      />
    </Stack.Navigator>
  );
};

const ContactStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: '',
          headerTransparent: true,
          headerLeftContainerStyle: {marginHorizontal: 20},
          headerLeft: () => (
            <Icon
              name="long-arrow-left"
              type="FontAwesome"
              style={{color: '#2f4562'}}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitle: () => (
            <Text style={{color: '#fff', fontSize: 24}}>Contacts</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const Navigations = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!auth.token.length ? (
        <AuthStack />
      ) : (
        <Drawer.Navigator initialRouteName="Home" drawerContent={SideBar}>
          <Drawer.Screen name="Home" component={ChatStack} />
          <Drawer.Screen name="Contacts" component={ContactStack} />
          <Drawer.Screen name="Settings" component={SettingStack} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigations;
