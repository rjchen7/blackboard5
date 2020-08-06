import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

import HomeScreen from './HomeScreen';
import { ImageSourcePropType } from 'react-native';
import { Props } from './MainTabScreen';

// import DMScreen from './DMScreen';

// the reason it is navigation.navigate('DM') is because in the DMStackScreen component it is named DM

const HomeStack = createStackNavigator();

const HomeStackScreen: FunctionComponent<any> = (
  { navigation },
  { onPotentialAdd }: Props
) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Inter_900Black',
        },
      }}>
      <HomeStack.Screen
        name='Home'
        options={{
          title: 'Blackboard',
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='black'
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}>
        {(props) => <HomeScreen {...props} onPotentialAdd={onPotentialAdd} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
