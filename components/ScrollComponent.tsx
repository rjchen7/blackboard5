import React, { Component, FunctionComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';
import { Description } from '../ProfilePopup';

// import DMScreen from '../DMScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePopup from '../ProfilePopup';
import { ProfileData } from '../HomeScreen';

type Props = {
  Name: string;
  Date: string;
  Thumb: ImageSourcePropType;
  ImageUri: ImageSourcePropType;
  text: string;
  modalOpen: boolean;
  Images: ImageSourcePropType[];
  Description: Description;
  onClose: () => void;
  addPotential: () => void;
  onProfilePress: () => void;
  onSetProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  addDMUser: () => void;
};

// let images = [
//   require('../assets/rookie.jpeg'),
//   require('../assets/scibowl.jpeg'),
//   require('../assets/cook.jpeg'),
//   require('../assets/crewshot.jpeg'),
// ];

let dummyDescription = {
  Bio: 'Penis',
  SleepSchedule: 'Pussy',
  Habits: 'penis',
  Activities: 'Pussy',
};

const ScrollComponent: FunctionComponent<Props> = ({
  Name,
  Date,
  Thumb,
  ImageUri,
  text,
  modalOpen,
  Images,
  Description,
  // onClose,
  addPotential,
  onProfilePress,
  onSetProfileData,
  addDMUser,
}) => {
  // const navigation = useNavigation();

  return (
    <Card>
      <CardItem>
        <Left>
          <TouchableOpacity
            onPress={() => {
              onSetProfileData({
                Name: Name,
                Thumb: Thumb,
                Images: Images,
                Description: Description,
              });
              onProfilePress();
            }}
          >
            <Thumbnail source={Thumb} />
          </TouchableOpacity>
          <Body>
            <Text>{Name}</Text>
            <Text>{Date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={ImageUri} style={{ height: 200, flex: 1 }} />
      </CardItem>
      <CardItem style={{ height: 45 }}>
        <Left>
          <Button transparent onPress={addPotential}>
            <Icon name='ios-add' style={{ color: 'black' }} />
          </Button>
          <Button transparent onPress={addDMUser}>
            <Icon name='ios-paper-plane' style={{ color: 'black' }} />
          </Button>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            <Text style={{ fontWeight: '700' }}>{Name}</Text>
            {text}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default ScrollComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
