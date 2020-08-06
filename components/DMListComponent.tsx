import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import { DMUser } from '../App';

const DMListComponent = ({ Name, Thumb }: DMUser) => {
  return (
    <View style={styles.container}>
      <Image source={Thumb} style={styles.image} />
      <Text>{Name}</Text>
    </View>
    // <Card style={styles.container}>
    //   <CardItem>
    //     <Left>
    //       <Thumbnail source={Thumb} />
    //       <Body>
    //         <Text style={styles.name}>{Name}</Text>
    //       </Body>
    //     </Left>
    //   </CardItem>
    // </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  name: {
    fontWeight: 'normal',
    fontSize: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.3,
    borderColor: 'black',
  },
});

export default DMListComponent;
