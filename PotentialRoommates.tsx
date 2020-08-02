import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PotentialRoommates = () => {
  return (
    <View style={styles.container}>
      <Text>Potential Roommates</Text>
      <Button title='Click Here' onPress={() => alert("Andy's gay!!!!!")} />
    </View>
  );
};

export default PotentialRoommates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
