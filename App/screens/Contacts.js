import React from 'react';
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
  Button,
  Footer,
  FooterTab,
} from 'native-base';

const Contacts = () => {
  return (
    <>
      <Header
        searchBar
        rounded
        style={{
          backgroundColor: '#152642',
          borderBottomWidth: 0.5,
          borderBottomColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Item style={{backgroundColor: '#152642'}}>
          <Icon
            name="search"
            type="FontAwesome"
            style={{color: '#2f4562', fontSize: 15}}
          />
          <Input
            placeholder="Search"
            style={{color: '#e6e9ef', fontSize: 15}}
          />
        </Item>
      </Header>
      <Content style={{backgroundColor: '#152642'}}>
        {[...Array(10)].map((item) => (
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2Favatar2-jake-navi-screaming.jpg&f=1&nofb=1',
                  }}
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
        ))}
      </Content>
      <Footer>
        <FooterTab>
          <Button style={{backgroundColor: '#152642'}}>
            <Text style={{fontSize: 15, color: '#4995be'}}>ADD CONTACT</Text>
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};

export default Contacts;