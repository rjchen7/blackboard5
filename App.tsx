import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { ImageSourcePropType } from 'react-native';

import MainTabScreen from './MainTabScreen';
import DrawerContent from './DrawerContent';
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

export type ID = {
  Username: string;
  Password: string;
};

const getFonts = () => {
  return Font.loadAsync({
    Billabong: require('./assets/fonts/Billabong.ttf'),
  });
};

const App = () => {
  // const roomies = React.createContext([]);
  const [userPass, setUserPass] = React.useState<ID>({
    Username: '',
    Password: '',
  });

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

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
    let added = false;
    if (filterArray.length < potentials.length) {
      added = true;
    }
    setPotentials([{ Name, Date, Thumb }, ...filterArray]);

    if (!added) {
      alert(Name + ' added to Potential Roommates.');
    } else {
      alert(Name + ' is already on Potential Roommates.');
    }
  };

  const removeListing = (Name: String) => {
    setPotentials(potentials.filter((potential) => potential.Name !== Name));
  };

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Login'
          drawerContent={(props) => (
            <DrawerContent
              {...props}
              potentials={potentials}
              onPotentialRemove={removeListing}
              setUserPass={setUserPass}
            />
          )}>
          <Drawer.Screen name='Login'>
            {(props) => (
              <LoginScreen
                {...props}
                userPass={userPass}
                setUserPass={setUserPass}
              />
            )}
          </Drawer.Screen>
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
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default App;
