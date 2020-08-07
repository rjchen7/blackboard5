import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { StyleSheet, View, ImageSourcePropType } from 'react-native';
import { Container, Content } from 'native-base';
import ScrollComponent from './components/ScrollComponent';
import { Roommate, DMUser } from './App';
import ProfileComponent from './components/PotentialListComponent';
import ProfilePopup, { Description } from './ProfilePopup';
import { StackActions } from '@react-navigation/native';

type Props = {
  navigation: any;
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Name, Thumb }: DMUser) => void;
  onSetChatId: React.Dispatch<React.SetStateAction<number>>;
  onSetChatName: React.Dispatch<React.SetStateAction<string>>;
};

export type ProfileData = {
  Name: string;
  Thumb: ImageSourcePropType;
  Images: ImageSourcePropType[];
  Description: Description;
};

let images = [
  [
    require('./assets/tricka.jpeg'),
    require('./assets/trickcoffee.jpeg'),
    require('./assets/tricksavage.jpeg'),
    require('./assets/trickserious.png'),
  ],
  [
    require('./assets/damnnn.png'),
    require('./assets/datway.jpeg'),
    require('./assets/pigubuff.jpeg'),
    require('./assets/quay.jpeg'),
  ],
  [
    require('./assets/chainzboof.jpeg'),
    require('./assets/chainzdolla.jpeg'),
    require('./assets/chainzglasses.jpeg'),
    require('./assets/chainzjam.jpeg'),
  ],
];

let descriptions = [
  {
    Bio:
      'Baby we back once a mfing gain with the Lawnmower 3.0. My ballsack was wrinkly as hell man, but then I put some ballsack deodorant on and damnnnnn.',
    SleepSchedule: 'We out here playing 30 hours a day, 7 days a week.',
    Habits: 'Sometimes Juul, Vodka on Saturday nights.',
    Activities: 'D Cane and the Dyr in League of Legends.',
  },
  {
    Bio:
      'They like to call me the sheriff of the West, my donger can wrap around yo neck like 10 times.',
    SleepSchedule:
      'I am very lazy and typically like to sleep around 12 hours a day during the most inconvenient times for you.',
    Habits:
      'I make the bus explode when I use the restroom, and I will in the room too.',
    Activities:
      'None. I do not like doing anything except blowing up the toilet repeatedly and making life devastating for everyone else.',
  },
  {
    Bio: 'They ask me how I do it who I do it for...',
    SleepSchedule: 'And How I Come up with this shit up in the studiooooo',
    Habits: 'All I want for my birthday is a...',
    Activities: 'Best friend that I can have a good ass time with.',
  },
];

const HomeScreen: FunctionComponent<Props> = ({
  navigation,
  onPotentialAdd,
  onDMListAdd,
  onSetChatId,
  onSetChatName,
}) => {
  const [profilePopupVisible, setProfilePopupVisible] = React.useState(false);

  const [profileData, setProfileData] = React.useState({
    Name: 'Test',
    Thumb: require('./assets/boomer2g.png'),
    Images: images[0],
    Description: {
      Bio: '',
      SleepSchedule: '',
      Habits: '',
      Activities: '',
    },
  });

  return (
    <Container style={styles.container}>
      <Content>
        <ProfilePopup
          modalOpen={profilePopupVisible}
          onClose={() => setProfilePopupVisible(false)}
          profileData={profileData}
        />
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
          Images={images[0]}
          Description={descriptions[0]}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePress={() => setProfilePopupVisible(true)}
          onSetProfileData={setProfileData}
          addDMUser={() => {
            onDMListAdd({
              Id: 1,
              Name: 'El Truco',
              Thumb: require('./assets/boomer2g.png'),
            });
            onSetChatId(1);
            onSetChatName('El Truco');
            navigation.navigate('DM');
            navigation.dispatch(StackActions.push('Chat'));
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
          Images={images[1]}
          Description={descriptions[1]}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePress={() => setProfilePopupVisible(true)}
          onSetProfileData={setProfileData}
          addDMUser={() => {
            onDMListAdd({
              Id: 2,
              Name: 'Rue Grandpa',
              Thumb: require('./assets/thegang.jpg'),
            });
            onSetChatId(2);
            onSetChatName('Rue Grandpa');
            navigation.navigate('DM');
            navigation.dispatch(StackActions.push('Chat'));
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
          Images={images[2]}
          Description={descriptions[2]}
          onClose={() => setProfilePopupVisible(false)}
          onProfilePress={() => setProfilePopupVisible(true)}
          onSetProfileData={setProfileData}
          addDMUser={() => {
            onDMListAdd({
              Id: 3,
              Name: '2 Chainz',
              Thumb: require('./assets/2chainz.jpeg'),
            });
            onSetChatId(3);
            onSetChatName('2 Chainz');
            navigation.navigate('DM');
            navigation.dispatch(StackActions.push('Chat'));
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
