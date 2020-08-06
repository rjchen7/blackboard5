import React, { FunctionComponent, SetStateAction, Dispatch } from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './HomeStackScreen';
import DMStackScreen from './DMStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import { NavigationProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';
import { Roommate } from './App';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen: FunctionComponent<Props> = ({ onPotentialAdd }: Props) => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#fff'
      inactiveColor='grey'
      shifting={true}
      barStyle={{ backgroundColor: 'black' }}>
      <Tab.Screen
        name='Home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}>
        {(props) => (
          <HomeStackScreen {...props} onPotentialAdd={onPotentialAdd} />
        )}
      </Tab.Screen>
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
        component={ProfileStackScreen}
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

export type Props = {
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
};

export default MainTabScreen;
