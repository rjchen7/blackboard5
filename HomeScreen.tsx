import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import ScrollComponent from './components/ScrollComponent';

const HomeScreen = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <Content>
        <ScrollComponent
          User='El Truco'
          Date='August 1, 2021'
          Thumb={require('./assets/trick2g.jpg')}
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
          Thumb={require('./assets/2chainz.jpg')}
          ImageUri={require('./assets/imdifferent.jpeg')}
          text=' Then I put a fat rabbit on a Craftmatic!'
          goToDM={() => navigation.navigate('DM')}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
