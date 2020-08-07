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

// import DMScreen from '../DMScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePopup from '../ProfilePopup';

type Props = {
  Name: string;
  Date: string;
  Thumb: ImageSourcePropType;
  ImageUri: ImageSourcePropType;
  text: string;
  modalOpen: boolean;
  onClose: () => void;
  addPotential: () => void;
  onProfilePopupOpen: () => void;
  addDMUser: () => void;
};

let images = [
  require('../assets/rookie.jpeg'),
  require('../assets/scibowl.jpeg'),
  require('../assets/cook.jpeg'),
  require('../assets/crewshot.jpeg'),
];

const ScrollComponent: FunctionComponent<Props> = ({
  Name,
  Date,
  Thumb,
  ImageUri,
  text,
  modalOpen,
  onClose,
  addPotential,
  onProfilePopupOpen,
  addDMUser,
}) => {
  // const navigation = useNavigation();

  return (
    <Card>
      <CardItem>
        <ProfilePopup
          modalOpen={modalOpen}
          onClose={onClose}
          Name={Name}
          Thumb={Thumb}
          Images={images}
          Description={{
            Bio: 'Penis',
            SleepSchedule: 'Pussy',
            Habits: 'penis',
            Activities: 'Pussy',
          }}
        />
        <Left>
          <TouchableOpacity onPress={onProfilePopupOpen}>
            <Thumbnail source={Thumb}></Thumbnail>
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
          <Button transparent>
            <Icon name='ios-share' style={{ color: 'black' }} />
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
