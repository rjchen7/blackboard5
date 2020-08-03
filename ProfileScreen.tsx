import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
const ProfileScreen = ({ navigation }) => {
  return (
    <Container style={{ flex: 1, backgroundColor: 'white' }}>
      <Header>
        <Left>
          <Icon name='md-person-add' style={{ paddingLeft: 10 }}></Icon>
        </Left>
        <Body>
          <Text style={{ fontWeight: '800' }}>Blackboard</Text>
        </Body>
        <Right>
          <Icon name='ios-beer' style={{ paddingRight: 10 }}></Icon>
        </Right>
      </Header>
      <Content>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Image
                source={require('./assets/trick2g.jpg')}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              ></Image>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  );
};

// const styles = StyleSheet.create({
//   container: {

//   }
// });

export default ProfileScreen;
