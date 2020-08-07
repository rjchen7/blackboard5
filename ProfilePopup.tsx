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

type Description = {
  Bio: string;
  SleepSchedule: string;
  Habits: string;
  Activities: string;
};

type Props = {
  modalOpen: boolean;
  onClose: () => void;
  Name: string;
  Thumb: ImageSourcePropType;
  Images: ImageSourcePropType[];
  Description: Description;
};

const ProfilePopup = ({
  modalOpen,
  onClose,
  Name,
  Thumb,
  Images,
  Description,
}: Props) => {
  return (
    <Modal
      visible={modalOpen}
      animationType='slide'
      presentationStyle='pageSheet'
      // onRequestClose={() => onClose}
    >
      <View>
        <Button title='x' onPress={onClose} />
      </View>
      <ProfileComponent
        Name={Name}
        Thumb={Thumb}
        Images={Images}
        Description={Description}
      />
    </Modal>
  );
};

export default ProfilePopup;
