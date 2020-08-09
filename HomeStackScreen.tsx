import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import { DMUser, Roommate } from './App';
import { Message } from './MainTabScreen';

// the reason it is navigation.navigate('DM') is because in the DMStackScreen component it is named DM

type Props = {
  navigation: any;
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Id, Name, Thumb }: DMUser) => void;
  onSetChatId: React.Dispatch<React.SetStateAction<number>>;
  onSetChatName: React.Dispatch<React.SetStateAction<string>>;
};

const HomeStack = createStackNavigator();

const HomeStackScreen: FunctionComponent<Props> = ({
  navigation,
  onPotentialAdd,
  onDMListAdd,
  onSetChatId,
  onSetChatName,
}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1919' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Billabong',
          fontSize: 35,
          color: '#f8f8ff',
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
              backgroundColor='#1A1919'
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}>
        {(props) => (
          <HomeScreen
            {...props}
            onPotentialAdd={onPotentialAdd}
            onDMListAdd={onDMListAdd}
            onSetChatId={onSetChatId}
            onSetChatName={onSetChatName}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
