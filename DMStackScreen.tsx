import React, { FunctionComponent } from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import DMScreen from './DMScreen';
import ChatScreen from './ChatScreen';
import { DMUser } from './App';
import { Message } from './MainTabScreen';

type Props = {
  navigation: any;
  route: any;
  DMList: DMUser[];
  messagesMap: Map<number, Message[]>;
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
  chatId,
  chatName,
  onSetChatId,
  onSetChatName,
}) => {
  const renderChatScreen = () => {
    return <ChatScreen chatId={chatId} messagesMap={messagesMap} />;
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
