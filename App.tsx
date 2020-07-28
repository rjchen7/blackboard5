import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go to DMs' onPress={() => navigation.navigate('DM')} />
    </View>
  );
}

function DMScreen({ navigation }) {
  return (
    // Penis
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>It go down in the DM</Text>
      <Button
        title='Go to DMs... again'
        onPress={() => navigation.push('DM')}
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();
const DMStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStackScreen} />
        <Drawer.Screen name='DM' component={DMStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
