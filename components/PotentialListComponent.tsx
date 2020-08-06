import React, { Component, FunctionComponent } from 'react';
import { Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Icon,
} from 'native-base';

// import DMScreen from '../DMScreen';

type Props = {
  Name: String;
  Date: String;
  Thumb: ImageSourcePropType;
  removeItemID: (Name: String) => void;
};

const PotentialListComponent: FunctionComponent<Props> = ({
  Name,
  Date,
  Thumb,
  removeItemID,
}) => {
  // const navigation = useNavigation();

  return (
    <Card style={styles.container}>
      <CardItem>
        <Left>
          <Thumbnail source={Thumb} />
          <Body>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.date}>{Date}</Text>
          </Body>
        </Left>
        <Right>
          <Icon name='logo-no-smoking' onPress={() => removeItemID(Name)} />
        </Right>
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
