import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Category';

// set modal height to a lower height, transparent prop, slide up animation
// bimbo
// this is a control component, controled by drawer

const PotentialRoommates: FunctionComponent<{
  modalOpen: boolean;
  onClose: () => any;
}> = (props) => {
  return (
    <Modal visible={props.modalOpen} animationType='slide'>
      <SafeAreaView style={styles.modalContent}>
        <Icon
          style={styles.modalToggle}
          name='ios-arrow-down'
          size={24}
          onPress={() => {
            // setModalOpen(false);
            props.onClose();
          }}
        />
        <Text>Hello world</Text>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 15,
    padding: 10,
    alignSelf: 'center',
  },
});

export default PotentialRoommates;

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
