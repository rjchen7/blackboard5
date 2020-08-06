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
    >
      <SafeAreaView style={styles.modalContent}>
        <Icon
          style={styles.modalToggle}
          name='ios-arrow-down'
          size={24}
          onPress={() => {
            props.onClose();
          }}
        />

        <Text style={styles.modalTitle}>Potential Roommates:</Text>
        <Container style={styles.container}>
          <Content>{renderPotentials()}</Content>
        </Container>
      </SafeAreaView>
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
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#f8f8ff',
  },
});

export default PotentialRoommates;
