import React, { FunctionComponent, useCallback } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { Message } from './MainTabScreen';
import { View } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

type ChatScreenProps = {
  navigation: any;
  messagesInput: Message[];
  onMessageRetrieval: (messages: Message[]) => void;
};

const renderBubble: FunctionComponent<any> = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: 'pink',
        },
        left: {
          backgroundColor: '#fff',
        },
      }}
      textStyle={{
        right: {
          color: 'black',
        },
        left: {
          color: 'black',
        },
      }}
    />
  );
};

const ChatScreen = ({
  navigation,
  messagesInput = [],
  onMessageRetrieval,
}: ChatScreenProps) => {
  const [messages, setMessages] = React.useState([]);

  console.log(messagesInput);

  // if (useIsFocused() == false) {
  //   navigation.
  // }

  useFocusEffect(
    React.useCallback(() => {
      setMessages(messagesInput);
    }, [])
  );

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Hello Andy the faggot!',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: require('./assets/eltrollo.jpeg'),
  //       },
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => {
        onSend(newMessages);
        onMessageRetrieval([...newMessages, ...messages]);
      }}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      inverted={true}
    />
  );
};

export default ChatScreen;
