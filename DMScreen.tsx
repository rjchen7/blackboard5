import React from 'react';
import { View, Text, Button } from 'react-native';

const DMScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>It go down in the DM</Text>
      <Button
        title='Go to DMs... again'
        onPress={() => navigation.push('DM')}
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DMScreen;
