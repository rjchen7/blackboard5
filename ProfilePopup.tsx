import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import {
  StyleSheet,
  ImageSourcePropType,
  Modal,
  View,
  Text,
  Button,
} from 'react-native';
import ProfileComponent from './components/ProfileComponent';
import { ProfileData } from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export type Description = {
  Bio: string;
  SleepSchedule: string;
  Habits: string;
  Activities: string;
};

type Props = {
  modalOpen: boolean;
  onClose: () => void;
  profileData: ProfileData;
};

const ProfilePopup = ({ modalOpen, onClose, profileData }: Props) => {
  return (
    <Modal
      visible={modalOpen}
      animationType='slide'
      presentationStyle='pageSheet'>
      <View style={styles.container}>
        <Icon
          style={styles.modalToggle}
          name='ios-arrow-down'
          size={24}
          onPress={() => {
            onClose();
          }}
        />
      </View>
      <ProfileComponent
        Name={profileData.Name}
        Thumb={profileData.Thumb}
        Images={profileData.Images}
        Description={profileData.Description}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8ff',
  },
  modalToggle: {
    padding: 10,
    alignSelf: 'center',
  },
});

export default ProfilePopup;
