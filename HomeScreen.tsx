import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content } from 'native-base';
import ScrollComponent from './components/ScrollComponent';
import { Roommate, DMUser } from './App';
import ProfileComponent from './components/PotentialListComponent';
import ProfilePopup from './ProfilePopup';

type Props = {
  navigation: any;
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Name, Thumb }: DMUser) => void;
  onSetChatId: React.Dispatch<React.SetStateAction<number>>;
  onSetChatName: React.Dispatch<React.SetStateAction<string>>;
};

const HomeScreen: FunctionComponent<Props> = ({
  navigation,
  onPotentialAdd,
  onDMListAdd,
  onSetChatId,
  onSetChatName,
}) => {
  const [profilePopupVisible, setProfilePopupVisible] = React.useState(false);
  let images = [
    require('./assets/rookie.jpeg'),
    require('./assets/scibowl.jpeg'),
    require('./assets/cook.jpeg'),
    require('./assets/crewshot.jpeg'),
  ];
  const ProfilePopUp = () => {
    setProfilePopupVisible(true);
    return (
      <View>
        <ProfilePopup
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          Name='El Truco'
          Thumb={require('./assets/boomer2g.png')}
          Images={images}
          Description={{
            Bio: 'Penis',
            SleepSchedule: 'Pussy',
            Habits: 'penis',
            Activities: 'pussy',
          }}
        />
      </View>
    );
  };
  return (
    <Container style={styles.container}>
      <Content>
        {/* <ProfilePopup
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          Name='El Truco'
          Thumb={require('./assets/boomer2g.png')}
          Images={images}
          Description={{
            Bio: 'Penis',
            SleepSchedule: 'Pussy',
            Habits: 'penis',
            Activities: 'pussy',
          }}
        /> */}
        <ScrollComponent
          Name='El Truco'
          Date='August 1, 2021'
          Thumb={require('./assets/boomer2g.png')}
          ImageUri={require('./assets/eltrollo.jpeg')}
          text=' BALLSACK!'
          addPotential={() =>
            onPotentialAdd({
              Name: 'El Truco',
              Date: 'August 1, 2021',
              Thumb: require('./assets/boomer2g.png'),
            })
          }
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePopupOpen={() => setProfilePopupVisible(true)}
          addDMUser={() => {
            onDMListAdd({
              Id: 1,
              Name: 'El Truco',
              Thumb: require('./assets/boomer2g.png'),
            });
            onSetChatId(1);
            onSetChatName('El Truco');
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
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePopupOpen={() => setProfilePopupVisible(true)}
          addDMUser={() => {
            onDMListAdd({
              Id: 2,
              Name: 'Rue Grandpa',
              Thumb: require('./assets/thegang.jpg'),
            });
            onSetChatId(2);
            onSetChatName('Rue Grandpa');
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
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePopupOpen={() => setProfilePopupVisible(true)}
          addDMUser={() => {
            onDMListAdd({
              Id: 3,
              Name: '2 Chainz',
              Thumb: require('./assets/2chainz.jpeg'),
            });
            onSetChatId(3);
            onSetChatName('2 Chainz');
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
