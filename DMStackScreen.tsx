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

type Props = {
  navigation: any;
  DMList: DMUser[];
  messagesMap: any;
  chatId: number;
  chatName: string;
};

const DMStack = createStackNavigator();

const DMStackScreen: FunctionComponent<Props> = ({
  navigation,
  DMList,
  messagesMap,
  chatId,
  chatName,
}) => {
  // if 0 then load the DmScreen, if any number then load the chat screen associated with the Id

  const renderChatScreen = () => {
    return (
      <ChatScreen
        messagesInput={messagesMap.get(chatId)}
        // onMessageRetrieval={handleMessageRetrieval}
      />
    );
  };

  return (
    <DMStack.Navigator
      initialRouteName='DM'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
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
              backgroundColor='black'
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}>
        {(props) => <DMScreen {...props} DMList={DMList} />}
      </DMStack.Screen>
      <DMStack.Screen
        name='Chat'
        options={{
          title: chatName,
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
