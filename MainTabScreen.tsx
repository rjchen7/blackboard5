import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DMScreen from './DMScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DMStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen: FunctionComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#fff'
      inactiveColor='grey'
      shifting={true}
      barStyle={{ backgroundColor: 'black' }}>
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='DM'
        component={DMStackScreen}
        options={{
          tabBarLabel: 'DMs',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-beer' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name='md-person' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
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
  </HomeStack.Navigator>
);

const DMStackScreen = ({ navigation }) => (
  <DMStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DMStack.Screen
      name='DM'
      component={DMScreen}
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
  </DMStack.Navigator>
);
