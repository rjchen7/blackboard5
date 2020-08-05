import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  // const [active, setActive] = React.useState(0);
  // const segmentClicked = (index: { index: number }) => {
  //   setActive(index);
  // };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginLeft: 15,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Image
          source={require('./assets/boomer2g.png')}
          style={{ width: 75, height: 75, borderRadius: 37.5 }}
        />
        <Button
          bordered
          dark
          style={{
            flex: 3,
            marginLeft: 20,
            marginRight: 30,
            justifyContent: 'center',
            height: 30,
          }}>
          <Text>Edit Profile</Text>
        </Button>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderTopColor: '#eae5e5',
          }}>
          <Icon name='ios-clipboard' onPress={() => {}} />
          <Icon name='ios-expand' onPress={() => {}} />
          <Icon name='ios-clock' onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
