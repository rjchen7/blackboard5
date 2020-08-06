import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { StyleSheet, ImageSourcePropType } from 'react-native';
import { Container, Content } from 'native-base';
import ScrollComponent from './components/ScrollComponent';
import { State } from 'react-native-gesture-handler';
import { Roommate, DMUser } from './App';

type Props = {
  navigation: any;
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Name, Thumb }: DMUser) => void;
};

const HomeScreen: FunctionComponent<Props> = ({
  navigation,
  onPotentialAdd,
  onDMListAdd,
}) => {
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
          addDMUser={() => {
            onDMListAdd({
              Id: '1',
              Name: 'El Truco',
              Thumb: require('./assets/boomer2g.png'),
            });
            navigation.navigate('DM');
          }}
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
          addDMUser={() => {
            onDMListAdd({
              Id: '2',
              Name: 'Rue Grandpa',
              Thumb: require('./assets/thegang.jpg'),
            });
            navigation.navigate('DM');
          }}
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
          addDMUser={() => {
            onDMListAdd({
              Id: '3',
              Name: '2 Chainz',
              Thumb: require('./assets/2chainz.jpeg'),
            });
            navigation.navigate('DM');
          }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
  },
});

export default HomeScreen;
