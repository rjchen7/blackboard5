import React, { Component } from 'react';
import { Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
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

type Props = {
  Name: String;
  Date: String;
  Thumb: ImageSourcePropType;
};

const PotentialListComponent = ({ Name, Date, Thumb }: Props) => {
  // const navigation = useNavigation();

  return (
    <Card style={styles.container}>
      <CardItem>
        <Left>
          <Thumbnail source={Thumb}></Thumbnail>
          <Body>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.date}>{Date}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    color: 'grey',
  },
});

export default PotentialListComponent;
