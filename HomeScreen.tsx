import React from 'react';
import { View, Text, Button } from 'react-native';
import DMScreen from './DMScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go to DMs' onPress={() => navigation.navigate('DM')} />
    </View>
  );
};

export default HomeScreen;
