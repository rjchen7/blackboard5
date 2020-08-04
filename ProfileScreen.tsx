import React from 'react';
import { View, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  // const [active, setActive] = React.useState(0);
  // const segmentClicked = (index: { index: number }) => {
  //   setActive(index);
  // };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <View style={{ marginLeft: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image
                source={require('./assets/boomer2g.png')}
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
              ></Image>
            </View>
            <Button
              bordered
              dark
              style={{
                flex: 3,
                marginLeft: 10,
                justifyContent: 'center',
                height: 30,
              }}
            >
              <Text>Edit Profile</Text>
            </Button>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 1,
              borderTopColor: '#eae5e5',
            }}
          >
            <Button transparent>
              <Icon name='ios-clipboard'></Icon>
            </Button>
            <Button transparent>
              <Icon name='ios-expand'></Icon>
            </Button>
            <Button transparent>
              <Icon name='ios-clock'></Icon>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
