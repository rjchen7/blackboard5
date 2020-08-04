import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DMScreen from './DMScreen';

const DMStack = createStackNavigator();

const DMStackScreen = ({ navigation }) => {
  return (
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
};

export default DMStackScreen;
