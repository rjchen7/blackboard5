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
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';
import { useNavigation } from '@react-navigation/native';
import { Roommate } from '../App';

type Props = {
  Name: string;
  Date: string;
  Thumb: ImageSourcePropType;
  ImageUri: ImageSourcePropType;
  text: string;
  addPotential: () => void;
  addDMUser: () => void;
};

const ScrollComponent: FunctionComponent<Props> = ({
  Name,
  Date,
  Thumb,
  ImageUri,
  text,
  addPotential,
  addDMUser,
}) => {
  // const navigation = useNavigation();

  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={Thumb}></Thumbnail>
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
