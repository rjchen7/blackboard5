import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';

// import DMScreen from './DMScreen';

// the reason it is navigation.navigate('DM') is because in the DMStackScreen component it is named DM

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
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
};

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title='Go to DMs' onPress={() => navigation.navigate('DM')} />
//     </View>
//   );
// };

export default HomeStackScreen;
