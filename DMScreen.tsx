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
import { Right } from 'native-base';
import { DMUser } from './App';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: any;
  DMList: DMUser[];
};

const Item: FunctionComponent<{
  navigate: any;
  name: string;
  thumb: ImageSourcePropType;
}> = ({ navigate, name, thumb }) => (
  <TouchableOpacity onPress={navigate}>
    <View style={styles.item}>
      <Image source={thumb} style={styles.profilePicture} />
      <Text style={styles.user}>{name}</Text>
      <Right style={styles.chatIcon}>
        <Icon name='ios-chatbubbles' color='lightblue' size={35} />
      </Right>
    </View>
  </TouchableOpacity>
);

const DMScreen: FunctionComponent<Props> = ({ navigation, DMList }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderItem: FunctionComponent<{ item: DMUser }> = ({ item }) => (
    <Item
      navigate={() => navigation.navigate('Chat')}
      name={item.Name}
      thumb={item.Thumb}
    />
  );

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
        keyExtractor={(item) => String(item.Id)}
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FFFA',
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'darkgrey',
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
    borderTopWidth: 0.5,
    borderColor: 'darkgrey',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  chatIcon: {
    paddingRight: 15,
  },
});

// const styles = StyleSheet.create({
//
// });

export default DMScreen;
