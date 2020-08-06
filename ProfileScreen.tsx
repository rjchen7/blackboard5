import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Button } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/Ionicons';

let images = [
  require('./assets/rookie.jpeg'),
  require('./assets/scibowl.jpeg'),
  require('./assets/cook.jpeg'),
  require('./assets/crewshot.jpeg'),
];

let { width, height } = Dimensions.get('window');
const title = 'Professional Boomer';

const ProfileScreen: FunctionComponent<any> = ({ navigation }) => {
  const [active, setActive] = React.useState(false);
  const [state, setState] = React.useState('Penis');

  const changeState = (stuff: string) => {
    setState(stuff);
  };

  const renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: width / 2 }, { height: width / 2 }]}>
          <Image
            source={image}
            style={{ flex: 1, width: undefined, height: undefined }}
          ></Image>
        </View>
      );
    });
  };

  const renderSectionTwo = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{ alignContent: 'center', fontWeight: 'bold', fontSize: 24 }}
        >
          Preferences
        </Text>
        <Divider style={styles.divider} />
        <View>
          <Icon name='ios-clock' size={30}></Icon>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>Sleep Day n Nite!</Text>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-beer' size={30}></Icon>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>I smoke all day.</Text>
        <Divider style={styles.divider} />
        <View>
          <Icon name='ios-baseball' size={30}></Icon>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>Penis</Text>
        <Divider style={styles.divider} />
      </SafeAreaView>
    );
  };

  const renderSection = () => {
    if (!active) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {renderSectionOne()}
        </View>
      );
    } else {
      return <View>{renderSectionTwo()}</View>;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <View style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10 }}>
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
                style={{ width: 75, height: 75, borderRadius: 37.5 }}
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
              onPress={() => navigation.navigate('EditProfile')}
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
});

export default ProfileScreen;
