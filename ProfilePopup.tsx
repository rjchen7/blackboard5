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
      <View>
        <Button title='x' onPress={onClose} />
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

export default ProfilePopup;
