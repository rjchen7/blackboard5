import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from './ProfileScreen';
import MainTabScreen from './MainTabScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={MainTabScreen} />
        {/* <Drawer.Screen name='DM' component={DMStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
