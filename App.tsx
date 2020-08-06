import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './MainTabScreen';
import DrawerContent from './DrawerContent';
import PotentialRoommates from './PotentialRoommates';
import PotentialHousing from './PotentialHousing';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import { ImageSourcePropType } from 'react-native';

const Drawer = createDrawerNavigator();

export type Roommate = {
  Name: String;
  Date: String;
  Thumb: ImageSourcePropType;
};

// array of potential roommates
// let potentials: Roommate[] = [
//   {
//     Name: 'El Truco',
//     Date: 'August 1, 2021',
//     Thumb: require('./assets/boomer2g.png'),
//   },
// ];

// const PotentialContext = React.createContext<Array<Roommate>>([]);

const App = () => {
  // const roomies = React.createContext([]);
  const [potentials, setPotentials] = React.useState<Array<Roommate>>([]);

  const handlePotentialAdd = ({ Name, Date, Thumb }: Roommate) => {
    setPotentials([{ Name, Date, Thumb }, ...potentials]);
    // console.log(6);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => (
          <DrawerContent {...props} potentials={potentials} />
        )}>
        <Drawer.Screen name='HomeDrawer'>
          {(props) => (
            <MainTabScreen {...props} onPotentialAdd={handlePotentialAdd} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
