import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import Category from './components/Category';

// set modal height to a lower height, transparent prop, slide up animation
// bimbo

const PotentialRoommates: FunctionComponent<{
  modalOpen: boolean;
  onClose: () => any;
}> = (props) => {
  return (
    <Modal visible={props.modalOpen}>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </Modal>
  );
};

export default PotentialRoommates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// // <ScrollView scrollEventThrottle={16}>
// <View style={{ flex: 1, backgroundColor: 'blue', paddingTop: 60 }}>
//   <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
//     Here's some potential roommates, Andy.
//   </Text>
//   <View style={{ backgroundColor: 'white', marginTop: 20 }}>
//     <ScrollView>
//       <Category
//         imageUri={require('./assets/trick2g.jpg')}
//         name='El Truco'
//       />
//       <Category
//         imageUri={require('./assets/thegang.jpg')}
//         name='The Gang'
//       />
//       <Category
//         imageUri={require('./assets/2chainz.jpg')}
//         name='Tauheed Epps'
//       />
//     </ScrollView>
//   </View>
// </View>
// // </ScrollView>
