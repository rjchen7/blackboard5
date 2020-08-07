import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

let { width, height } = Dimensions.get('window');
type Description = {
  Bio: string;
  SleepSchedule: string;
  Habits: string;
  Activities: string;
};

export type Info = {
  Name: string;
  Thumb: ImageSourcePropType;
  Images: ImageSourcePropType[];
  Description: Description;
};

const ProfileComponent: FunctionComponent<Info> = ({
  Name,
  Thumb,
  Images,
  Description,
}) => {
  const [active, setActive] = React.useState(false);
  const renderSectionOne = () => {
    return Images.map((image: any, index: any) => {
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
          />
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
        <View style={styles.icon}>
          <Icon name='ios-book' size={30}></Icon>
          <Text style={styles.desc}>{Description.Bio}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-clock' size={30}></Icon>
          <Text style={styles.desc}>{Description.SleepSchedule}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-beer' size={30}></Icon>
          <Text style={styles.desc}>{Description.Habits}</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.icon}>
          <Icon name='ios-baseball' size={30}></Icon>
          <Text style={styles.desc}>{Description.Activities}</Text>
        </View>
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
    <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
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
              <Image source={Thumb} style={styles.profilePicture} />
              <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>{Name}</Text>
            </View>
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
                name='md-images'
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
                name='md-information-circle-outline'
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
    width: 50,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bottomButton: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 40,
    justifyContent: 'center',
    height: 30,
  },
});

export default ProfileComponent;
