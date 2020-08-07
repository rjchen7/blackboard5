import React, { FunctionComponent, ReactElement } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DMScreen from './DMScreen';
import ChatScreen from './ChatScreen';
import { DMUser } from './App';
import { Message } from './MainTabScreen';
import { useIsFocused } from '@react-navigation/native';

type Props = {
  navigation: any;
  DMList: DMUser[];
  messagesMap: Map<number, Message[]>;
  onMessageRetrieval: (messages: Message[]) => void;
  chatId: number;
  chatName: string;
  onSetChatId: React.Dispatch<React.SetStateAction<number>>;
  onSetChatName: React.Dispatch<React.SetStateAction<string>>;
};

const DMStack = createStackNavigator();

const DMStackScreen: FunctionComponent<Props> = ({
  navigation,
  DMList,
  messagesMap,
  onMessageRetrieval,
  chatId,
  chatName,
  onSetChatId,
  onSetChatName,
}) => {
  // if 0 then load the DmScreen, if any number then load the chat screen associated with the Id

  const renderChatScreen = () => {
    return (
      <ChatScreen
        navigation={navigation}
        messagesInput={messagesMap.get(chatId) || []}
        onMessageRetrieval={onMessageRetrieval}
      />
    );
  };

  return (
    <DMStack.Navigator
      initialRouteName='DM'
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
      <DMStack.Screen
        name='DMs'
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
          <DMScreen
            {...props}
            DMList={DMList}
            onSetChatId={onSetChatId}
            onSetChatName={onSetChatName}
          />
        )}
      </DMStack.Screen>
      <DMStack.Screen
        name='Chat'
        options={{
          title: chatName,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <HeaderBackButton
              label="DM's"
              tintColor='white'
              onPress={() => navigation.navigate('DMs')}
            />
          ),
        }}>
        {renderChatScreen}
      </DMStack.Screen>
    </DMStack.Navigator>
  );
};

export default DMStackScreen;
