import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';
import { State } from 'react-native-gesture-handler';
import EditProfileScreen from './EditProfileScreen';

let images = [
  require('./assets/rookie.jpeg'),
  require('./assets/scibowl.jpeg'),
  require('./assets/cook.jpeg'),
  require('./assets/crewshot.jpeg'),
];

let { width, height } = Dimensions.get('window');
type Description = {
  Bio: string;
  SleepSchedule: string;
  Habits: string;
  Activities: string;
};
const title = 'Professional Boomer';

const ProfileScreen: FunctionComponent<any> = ({ navigation }) => {
  const [active, setActive] = React.useState(false);
  const [state, setState] = React.useState({
    Bio: 'Air',
    SleepSchedule: 'Rick',
    Habits: 'Inthe',
    Activities: 'Dick',
  });
  const [inEditMode, setInEditMode] = React.useState(false);

  const renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: width / 2 }, { height: width / 2 }]}>
          <Image
            source={image}
            style={{
              flex: 1,
              borderWidth: 0.3,
              borderColor: 'black',
              width: undefined,
              height: undefined,
            }}
          ></Image>
        </View>
      );
    });
  };

  const saveChanges = () => {};

  const renderSectionTwo = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{ alignContent: 'center', fontWeight: 'bold', fontSize: 24 }}
        >
          Preferences
        </Text>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-book' size={30}></Icon>
          <Text>{state.Bio}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-clock' size={30}></Icon>
          <Text>{state.SleepSchedule}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-beer' size={30}></Icon>
          <Text>{state.Habits}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-baseball' size={30}></Icon>
          <Text>{state.Activities}</Text>
        </View>
      </SafeAreaView>
    );
  };

  const renderSection = () => {
    if (inEditMode) {
      return <View>{renderEdit()}</View>;
    } else {
      if (!active) {
        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {renderSectionOne()}
          </View>
        );
      } else {
        return <View>{renderSectionTwo()}</View>;
      }
    }
  };

  const renderEdit = () => {
    const Possible = {
      Bio: state.Bio,
      SleepSchedule: state.SleepSchedule,
      Habits: state.Habits,
      Activities: state.Activities,
    };
    const changeBio = (text: string) => {
      Possible.Bio = text;
    };
    const changeSchedule = (text: string) => {
      Possible.SleepSchedule = text;
    };
    const changeHabits = (text: string) => {
      Possible.Habits = text;
    };
    const changeActivities = (text: string) => {
      Possible.Activities = text;
    };
    const saveInputs = (Possible: Description) => {
      setState({
        Bio: Possible.Bio,
        SleepSchedule: Possible.SleepSchedule,
        Habits: Possible.Habits,
        Activities: Possible.Activities,
      });
      setInEditMode(!inEditMode);
    };
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{ alignContent: 'center', fontWeight: 'bold', fontSize: 24 }}
        >
          Preferences
        </Text>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-book' size={30}></Icon>
          <TextInput
            style={styles.input}
            placeholder={state.Bio}
            onChangeText={(text) => changeBio(text)}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-clock' size={30}></Icon>
          <TextInput
            style={styles.input}
            placeholder={state.SleepSchedule}
            onChangeText={(text) => changeSchedule(text)}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-beer' size={30}></Icon>
          <TextInput
            style={styles.input}
            placeholder={state.Habits}
            onChangeText={(text) => changeHabits(text)}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-baseball' size={30}></Icon>
          <TextInput
            style={styles.input}
            placeholder={state.Activities}
            onChangeText={(text) => changeActivities(text)}
          />
        </View>
        <View style={styles.button}>
          <Button
            bordered
            dark
            style={{
              flex: 3,
              marginTop: 25,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: 'center',
              height: 30,
            }}
            onPress={() => saveInputs(Possible)}
          >
            <Text>Save</Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <View
          style={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingBottom: 10,
            paddingRight: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('./assets/datway.jpeg')}
                style={styles.profilePicture}
              />
              <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>
                Andy Wu
              </Text>
            </View>
            <Button
              bordered
              dark
              style={{
                flex: 3,
                marginTop: 25,
                marginLeft: 10,
                marginRight: 10,
                justifyContent: 'center',
                height: 30,
              }}
              onPress={() => setInEditMode(!inEditMode)}
            >
              <Text>Edit Profile</Text>
            </Button>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderTopWidth: 1,
              borderTopColor: '#eae5e5',
            }}
          >
            <Button
              transparent
              onPress={() => {
                setActive(false);
              }}
            >
              <Icon
                style={[active == false ? { color: 'teal' } : {}]}
                name='ios-clipboard'
                size={30}
              />
            </Button>
            <Button
              transparent
              onPress={() => {
                setActive(true);
              }}
            >
              <Icon
                name='ios-expand'
                style={[active == true ? { color: 'teal' } : {}]}
                size={30}
              />
            </Button>
          </View>
          {renderSection()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  name: {
    color: '#5e5e5e',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5e5e5e',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#c0c0c0',
    width: width - 60,
    margin: 10,
  },
  icon: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    fontSize: 14,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  button: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default ProfileScreen;
