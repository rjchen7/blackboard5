import React, { FunctionComponent } from 'react';
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

import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import EditProfileScreen from './EditProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileStackScreen: FunctionComponent<any> = ({ navigation }) => {
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
        name='Profile'
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
      <ProfileStack.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{ title: 'Edit Profile' }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
