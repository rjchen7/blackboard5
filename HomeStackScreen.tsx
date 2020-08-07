import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';

import HomeScreen from './HomeScreen';
import { DMUser, Roommate } from './App';

// import DMScreen from './DMScreen';

// the reason it is navigation.navigate('DM') is because in the DMStackScreen component it is named DM

type Props = {
  navigation: any;
  onPotentialAdd: ({ Name, Date, Thumb }: Roommate) => void;
  onDMListAdd: ({ Id, Name, Thumb }: DMUser) => void;
  onSetChatId: React.Dispatch<React.SetStateAction<number>>;
  onSetChatName: React.Dispatch<React.SetStateAction<string>>;
};

const HomeStack = createStackNavigator();

const HomeStackScreen: FunctionComponent<Props> = ({
  navigation,
  onPotentialAdd,
  onDMListAdd,
  onSetChatId,
  onSetChatName,
}) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Inter_900Black',
        },
      }}>
      <HomeStack.Screen
        name='Home'
        options={{
          title: 'Blackboard',
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              size={25}
              backgroundColor='black'
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}>
        {(props) => (
          <HomeScreen
            {...props}
            onPotentialAdd={onPotentialAdd}
            onDMListAdd={onDMListAdd}
            onSetChatId={onSetChatId}
            onSetChatName={onSetChatName}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
