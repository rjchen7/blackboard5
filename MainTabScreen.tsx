import React, { FunctionComponent } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './HomeStackScreen';
import DMStackScreen from './DMStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import { Roommate, DMUser } from './App';

const Tab = createMaterialBottomTabNavigator();

export type Message = {
  // this _id is the text id
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    // this _id is the user id
    _id: number;
    name: string;
    avatar: any;
  };
};

type Props = {
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Id, Name, Thumb }: DMUser) => void;
  DMList: DMUser[];
};

let messagesMap = new Map();

messagesMap.set(1, [
  {
    _id: 1,
    text: 'LNL Tonight?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'El Truco',
      avatar: require('./assets/boomer2g.png'),
    },
  },
  {
    _id: 2,
    text: 'Hello Andy!',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'El Truco',
      avatar: require('./assets/boomer2g.png'),
    },
  },
]);
messagesMap.set(2, [
  {
    _id: 1,
    text:
      'Hey Andy, I heard youre gay and I really am too. Do you want to meet up?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Rue Grandpa',
      avatar: require('./assets/thegang.jpg'),
    },
  },
]);
messagesMap.set(3, []);

const MainTabScreen: FunctionComponent<Props> = ({
  onPotentialAdd,
  onDMListAdd,
  DMList,
}) => {
  const [chatId, setChatId] = React.useState(0);
  const [chatName, setChatName] = React.useState('Rick');

  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#f8f8f8'
      inactiveColor='grey'
      shifting={true}
      barStyle={{ backgroundColor: '#1A1919' }}>
      <Tab.Screen
        name='Home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // dont really understand this
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}>
        {(props) => (
          <HomeStackScreen
            {...props}
            onPotentialAdd={onPotentialAdd}
            onDMListAdd={onDMListAdd}
            onSetChatId={setChatId}
            onSetChatName={setChatName}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name='DM'
        options={{
          tabBarLabel: "DM's",
          tabBarIcon: ({ color }) => (
            <Icon name='ios-beer' color={color} size={26} />
          ),
        }}>
        {(props) => (
          <DMStackScreen
            {...props}
            DMList={DMList}
            messagesMap={messagesMap}
            chatId={chatId}
            chatName={chatName}
            onSetChatId={setChatId}
            onSetChatName={setChatName}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name='Profile'
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name='md-person' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
