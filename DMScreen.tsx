import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

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

const DMScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>It go down in the DM</Text>
    <Button title='Go to DMs... again' onPress={() => navigation.push('DM')} />
    <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
    <Button title='Go back' onPress={() => navigation.goBack()} />
  </View>
);

export default DMStackScreen;
