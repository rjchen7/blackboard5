import React, { FunctionComponent } from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PotentialRoommates from './PotentialRoommates';
import { Roommate, ID } from './App';

type Props = {
  navigation: any;
  potentials: Roommate[];
  onPotentialRemove: (Name: String) => void;
  setUserPass: React.Dispatch<React.SetStateAction<ID>>;
};

const DrawerContent: FunctionComponent<Props> = ({
  navigation,
  potentials,
  onPotentialRemove,
  setUserPass,
}) => {
  // creating state isDarkTheme
  const [isSearching, setIsSearching] = React.useState(true);

  // on switch isDarkTheme will be set to the opposite boolean value
  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  // state for if Potential Roommates Modal
  const [potentialRoommatesOpen, setPotentialRoommatesOpen] = React.useState(
    false
  );

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('./assets/datway.jpeg')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Andy Wu</Title>
                <Caption style={styles.caption}>@BlackboardCrew</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  wo fucking
                </Paragraph>
                <Caption style={styles.caption}>dumb</Caption>
              </View>

              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  I like
                </Paragraph>
                <Caption style={styles.caption}>pp</Caption>
              </View>
            </View>
          </View>

          <PotentialRoommates
            modalOpen={potentialRoommatesOpen}
            potentials={potentials}
            onClose={() => {
              setPotentialRoommatesOpen(false);
            }}
            onPotentialRemove={onPotentialRemove}
          />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name='account-multiple-outline'
                  color={color}
                  size={size}
                />
              )}
              label='Potential Roommates'
              onPress={() => {
                setPotentialRoommatesOpen(true);
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='bed-empty' color={color} size={size} />
              )}
              label='Potential Housing'
              onPress={() =>
                alert('Coming Soon: Google Maps API for housing near you.')
              }
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='settings-outline' color={color} size={size} />
              )}
              label='Settings'
              onPress={() => {
                alert('Settings not available for demo.');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name='account-check-outline' color={color} size={size} />
              )}
              label='Support'
              onPress={() => {
                alert('Call Ryan Chen at 352-317-8118 for support.');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title='Status'>
            <TouchableRipple
              onPress={() => {
                toggleSearch();
              }}
            >
              <View style={styles.preference}>
                <Text>Actively Searching</Text>
                <View pointerEvents='none'>
                  <Switch value={isSearching} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='exit-to-app' color={color} size={size} />
          )}
          label='Logout'
          onPress={() => {
            setUserPass({ Username: '', Password: '' });
            navigation.navigate('Login');
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
