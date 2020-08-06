import React, { FunctionComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';
import { Container, Content } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';
import PotentialListComponent from './components/PotentialListComponent';
import { Roommate } from './App';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// import Category from './components/Category';

// set modal height to a lower height, transparent prop, slide up animation
// bimbo
// this is a control component, controled by drawer

const PotentialRoommates: FunctionComponent<{
  modalOpen: boolean;
  potentials: Roommate[];
  onClose: () => any;
}> = (props) => {
  // renders all potentials into a container tag
  const renderPotentials = () => {
    return props.potentials.map((potential, index) => {
      return (
        <PotentialListComponent
          key={index}
          Name={potential.Name}
          Date={potential.Date}
          Thumb={potential.Thumb}
        />
      );
    });
  };

  return (
    <Modal
      visible={props.modalOpen}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={props.onClose}>
      {/* <TouchableWithoutFeedback
        style={{ backgroundColor: 'red' }}
        onPressOut={() => props.onClose()}> */}
      <SafeAreaView style={styles.modalContent}>
        <Icon
          style={styles.modalToggle}
          name='ios-arrow-down'
          size={24}
          onPress={() => {
            props.onClose();
          }}
        />
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
          <Text style={styles.modalTitle}>Potential Roommates:</Text>
        </View>
        <Container style={styles.container}>
          <Content>{renderPotentials()}</Content>
        </Container>
      </SafeAreaView>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  modalToggle: {
    padding: 10,
    alignSelf: 'center',
  },
  modalTitle: {
    marginBottom: 5,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    marginTop: 5,
    backgroundColor: '#f8f8ff',
  },
});

export default PotentialRoommates;
