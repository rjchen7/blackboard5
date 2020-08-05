import React from 'react';
import { View, Text, Image } from 'react-native';
<<<<<<< HEAD
=======
import { createStackNavigator } from '@react-navigation/stack';
>>>>>>> bac37a7f7fcf2c56b581b0cf584c8d5d4a62c15d
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  // const [active, setActive] = React.useState(0);
  // const segmentClicked = (index: { index: number }) => {
  //   setActive(index);
  // };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
<<<<<<< HEAD
      <View style={{ marginLeft: 15, marginTop: 20, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
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
=======
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
>>>>>>> bac37a7f7fcf2c56b581b0cf584c8d5d4a62c15d
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
