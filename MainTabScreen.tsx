import React, { FunctionComponent } from 'react';
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

export default MainTabScreen;

// const HomeStackScreen: FunctionComponent<any> = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: 'black' },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name='Home'
//       component={HomeScreen}
//       options={{
//         title: 'Blackboard',
//         headerLeft: () => (
//           <Icon.Button
//             name='ios-menu'
//             size={25}
//             backgroundColor='black'
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const DMStackScreen = ({ navigation }) => (
//   <DMStack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: 'black' },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DMStack.Screen
//       name='DM'
//       component={DMScreen}
//       options={{
//         title: 'Blackboard',
//         headerLeft: () => (
//           <Icon.Button
//             name='ios-menu'
//             size={25}
//             backgroundColor='black'
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </DMStack.Navigator>
// );
