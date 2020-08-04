import React, { useEffect, useCallback, FunctionComponent } from 'react';
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';

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

const DMScreen = () => {
  const [messages, setMessages] = React.useState([
    {
      _id: 1,
      text: 'youre so gay that you can gay the gay',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'El Truco',
        avatar: require('./assets/eltrollo.jpeg'),
      },
    },
    {
      _id: 2,
      text: 'Hello Andy the faggot!',
      createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
      user: {
        _id: 2,
        name: 'El Truco',
        avatar: require('./assets/eltrollo.jpeg'),
      },
    },
  ]);

  //   useEffect(() => {
  //     setMessages([
  //       {
  //         _id: 1,
  //         text: 'Hello Andy the faggot!',
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: 'React Native',
  //           avatar: require('./assets/eltrollo.jpeg'),
  //         },
  //       },
  //     ]);
  //   }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    // <View>
    //   <Text>Andy</Text>
    // </View>
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      inverted={true}
    />
  );
};

export default DMScreen;
