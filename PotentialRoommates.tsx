import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Category from './components/Category';

const PotentialRoommates = () => {
  return (
    <ScrollView scrollEventThrottle={16}>
      <View style={{flex:1, backgroundColor:'white', paddingTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
          Here's some potential roommates, Andy.
        </Text>
        <View style={{height:130, marginTop:20}}>
          <ScrollView>
          <Category imageUri={require('./assets/trick2g.jpg')}
              name="El Truco"/>
              <Category imageUri={require('./assets/thegang.jpg')}
              name="The Gang"/>
              <Category imageUri={require('./assets/2chainz.jpg')}
              name="Tauheed Epps"/>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
