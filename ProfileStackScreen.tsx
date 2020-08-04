import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen
        name='DM'
        component={ProfileScreen}
        options={{
          title: 'Blackboard',
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='black'
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

const ProfileScreen = ({ navigation }) => {
  // const [active, setActive] = React.useState(0);
  // const segmentClicked = (index: { index: number }) => {
  //   setActive(index);
  // };
  return (
    <Container style={{ flex: 1, backgroundColor: 'white' }}>
      <Content>
        <View style={{ marginLeft: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={require('./assets/boomer2g.png')}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}></Image>
            </View>
            <Button
              bordered
              dark
              style={{
                flex: 3,
                marginLeft: 10,
                justifyContent: 'center',
                height: 30,
              }}>
              <Text>Edit Profile</Text>
            </Button>
            <Button
              bordered
              dark
              style={{
                flex: 1,
                height: 30,
                marginRight: 10,
                marginLeft: 5,
                justifyContent: 'center',
              }}>
              <Icon name='ios-settings'></Icon>
            </Button>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 1,
              borderTopColor: '#eae5e5',
            }}>
            <Button transparent>
              <Icon name='ios-clipboard'></Icon>
            </Button>
            <Button transparent>
              <Icon name='ios-expand'></Icon>
            </Button>
            <Button transparent>
              <Icon name='ios-clock'></Icon>
            </Button>
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

export default ProfileStackScreen;
