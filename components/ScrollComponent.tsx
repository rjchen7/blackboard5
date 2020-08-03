import React, { Component } from 'react';
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

type Props = {
  User: string;
  Date: string;
  Thumb: ImageSourcePropType;
  ImageUri: ImageSourcePropType;
  text: string;
};

const ScrollComponent = ({ User, Date, Thumb, ImageUri, text }: Props) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={Thumb}></Thumbnail>
          <Body>
            <Text>{User}</Text>
            <Text>{Date}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={ImageUri} style={{ height: 200, flex: 1 }}></Image>
      </CardItem>
      <CardItem style={{ height: 45 }}>
        <Left>
          <Button transparent>
            <Icon name='ios-add' style={{ color: 'black' }}></Icon>
          </Button>
          <Button transparent>
            <Icon name='ios-paper-plane' style={{ color: 'black' }}></Icon>
          </Button>
          <Button transparent>
            <Icon name='ios-share' style={{ color: 'black' }}></Icon>
          </Button>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Text>
            <Text style={{ fontWeight: '700' }}>{User}</Text>
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
