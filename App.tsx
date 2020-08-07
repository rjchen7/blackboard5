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
import ChatScreen from './ChatScreen';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';
import LoginScreen from './LoginScreen';

const Drawer = createDrawerNavigator();

export type Roommate = {
  Name: string;
  Date: string;
  Thumb: ImageSourcePropType;
};

export type DMUser = {
  Id: number;
  Name: string;
  Thumb: ImageSourcePropType;
};

const App = () => {
  // const roomies = React.createContext([]);
  const [potentials, setPotentials] = React.useState<Array<Roommate>>([]);

  const [DMList, setDMList] = React.useState<Array<DMUser>>([]);

  const handleDMListAdd = ({ Id, Name, Thumb }: DMUser) => {
    const filterArray = DMList.filter((User) => User.Id !== Id);
    setDMList([{ Id, Name, Thumb }, ...filterArray]);
  };

  const handlePotentialAdd = ({ Name, Date, Thumb }: Roommate) => {
    const filterArray = potentials.filter(
      (potential) => potential.Name !== Name
    );
    setPotentials([{ Name, Date, Thumb }, ...filterArray]);
  };

  const removeListing = (Name: String) => {
    setPotentials(potentials.filter((potential) => potential.Name !== Name));
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Login'
        drawerContent={(props) => (
          <DrawerContent
            {...props}
            potentials={potentials}
            onPotentialRemove={removeListing}
          />
        )}>
        <Drawer.Screen name='Login' component={LoginScreen} />
        <Drawer.Screen name='HomeDrawer'>
          {(props) => (
            <MainTabScreen
              {...props}
              onPotentialAdd={handlePotentialAdd}
              onDMListAdd={handleDMListAdd}
              DMList={DMList}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
