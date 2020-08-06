import React, { useEffect, useCallback, FunctionComponent } from 'react';
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Container, Content } from 'native-base';
import DMListComponent from './components/DMListComponent';
import { DMUser } from './App';

type Props = {
  DMList: DMUser[];
};

const Item: FunctionComponent<{ name: string; thumb: ImageSourcePropType }> = ({
  name,
  thumb,
}) => (
  <View style={styles.item}>
    <Image source={thumb} style={styles.profilePicture} />
    <Text style={styles.user}>{name}</Text>
  </View>
);

const DMScreen: FunctionComponent<Props> = ({ DMList }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const renderItem: FunctionComponent<{ item: DMUser }> = ({ item }) => (
    <Item name={item.Name} thumb={item.Thumb} />
  );

  // const renderDMList = () => {
  //   return DMList.map((user, index) => {
  //     return (
  //       <DMListComponent key={index} Name={user.Name} Thumb={user.Thumb} />
  //     );
  //   });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {/* <View>  why does having this view here block the container and its content underneath?*/}
      <FlatList
        style={styles.flatList}
        data={DMList}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id}
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#F5FFFA',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#F5FFFA',
    padding: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: 'darkgrey',
    // marginVertical: 8
    // marginHorizontal: 16,
  },
  user: {
    fontSize: 15,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  searchBar: {
    padding: 5,
    backgroundColor: '#F5FFFA',
  },
  content: {
    margin: 0,
  },
  flatList: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: 'darkgrey',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.3,
    borderColor: 'black',
  },
});

// const styles = StyleSheet.create({
//
// });

// const renderBubble: FunctionComponent<any> = (props) => {
//   return (
//     <Bubble
//       {...props}
//       wrapperStyle={{
//         right: {
//           backgroundColor: 'pink',
//         },
//         left: {
//           backgroundColor: '#fff',
//         },
//       }}
//       textStyle={{
//         right: {
//           color: 'black',
//         },
//         left: {
//           color: 'black',
//         },
//       }}
//     />
//   );
// };

// const DMScreen = () => {
//   const [messages, setMessages] = React.useState([
//     {
//       _id: 1,
//       text: 'youre so gay that you can gay the gay',
//       createdAt: new Date(),
//       user: {
//         _id: 2,
//         name: 'El Truco',
//         avatar: require('./assets/eltrollo.jpeg'),
//       },
//     },
//     {
//       _id: 2,
//       text: 'Hello Andy the faggot!',
//       createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
//       user: {
//         _id: 2,
//         name: 'El Truco',
//         avatar: require('./assets/eltrollo.jpeg'),
//       },
//     },
//   ]);

//   // useEffect(() => {
//   //   setMessages([
//   //     {
//   //       _id: 1,
//   //       text: 'Hello Andy the faggot!',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2,
//   //         name: 'React Native',
//   //         avatar: require('./assets/eltrollo.jpeg'),
//   //       },
//   //     },
//   //   ]);
//   // }, []);

//   const onSend = useCallback((messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={(messages) => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//       renderBubble={renderBubble}
//       inverted={true}
//     />
//   );
// };

export default DMScreen;
