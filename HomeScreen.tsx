import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { StyleSheet, ImageSourcePropType } from 'react-native';
import { Container, Content } from 'native-base';
import ScrollComponent from './components/ScrollComponent';
import { State } from 'react-native-gesture-handler';
import { Props } from './MainTabScreen';

const HomeScreen: FunctionComponent<any> = ({
  navigation,
  onPotentialAdd,
}: any) => {
  return (
    <Container style={styles.container}>
      <Content>
        <ScrollComponent
          Name='El Truco'
          Date='August 1, 2021'
          Thumb={require('./assets/boomer2g.png')}
          ImageUri={require('./assets/eltrollo.jpeg')}
          text=' BALLSACK!'
          addPotential={
            () =>
              onPotentialAdd({
                Name: 'El Truco',
                Date: 'August 1, 2021',
                Thumb: require('./assets/boomer2g.png'),
              })
            // console.log(6)
          }
          goToDM={() => navigation.navigate('DM')}
        />
        <ScrollComponent
          Name='Rue Grandpa'
          Date='June 9, 2011'
          Thumb={require('./assets/thegang.jpg')}
          ImageUri={require('./assets/unclesam.jpeg')}
          text=' There is a new fucking sheriff in town.'
          addPotential={() =>
            onPotentialAdd({
              Name: 'Rue Grandpa',
              Date: 'June 9, 2011',
              Thumb: require('./assets/thegang.jpg'),
            })
          }
          goToDM={() => navigation.navigate('DM')}
        />
        <ScrollComponent
          Name='2 Chainz'
          Date='April 12, 2013'
          Thumb={require('./assets/2chainz.jpeg')}
          ImageUri={require('./assets/imdifferent.jpeg')}
          text=' Then I put a fat rabbit on a Craftmatic!'
          addPotential={() =>
            onPotentialAdd({
              Name: '2 Chainz',
              Date: 'April 12, 2013',
              Thumb: require('./assets/2chainz.jpeg'),
            })
          }
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
