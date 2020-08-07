import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = (navigation: { navigation: any }) => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
