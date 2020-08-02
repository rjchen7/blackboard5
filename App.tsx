import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './MainTabScreen';
import DrawerContent from './DrawerContent';
import PotentialRoommates from './PotentialRoommates';
import PotentialHousing from './PotentialHousing';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        <Drawer.Screen
          name='PotentialRoommates'
          component={PotentialRoommates}
        />
        <Drawer.Screen name='PotentialHousing' component={PotentialHousing} />
        {/* <Drawer.Screen name='DM' component={DMStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
