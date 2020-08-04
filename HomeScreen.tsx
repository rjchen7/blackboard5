import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Container, Content, Icon } from 'native-base';
// import DMScreen from './DMScreen';
import ScrollComponent from './components/ScrollComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

// the reason it is navigation.navigate('DM') is because in the DMStackScreen component it is named DM

const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Content>
        <ScrollComponent
          User='El Truco'
          Date='August 1, 2021'
          Thumb={require('./assets/boomer2g.png')}
          ImageUri={require('./assets/eltrollo.jpeg')}
          text=' BALLSACK!'
          goToDM={() => navigation.navigate('DM')}
        />
        <ScrollComponent
          User='Rue Grandpa'
          Date='June 9, 2011'
          Thumb={require('./assets/thegang.jpg')}
          ImageUri={require('./assets/unclesam.jpeg')}
          text=' There is a new fucking sheriff in town.'
          goToDM={() => navigation.navigate('DM')}
        />
        <ScrollComponent
          User='2 Chainz'
          Date='April 12, 2013'
          Thumb={require('./assets/2chainz.jpeg')}
          ImageUri={require('./assets/imdifferent.jpeg')}
          text=' Then I put a fat rabbit on a Craftmatic!'
          goToDM={() => navigation.navigate('DM')}
        />
      </Content>
    </Container>
  );
};

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title='Go to DMs' onPress={() => navigation.navigate('DM')} />
//     </View>
//   );
// };

export default HomeScreen;
