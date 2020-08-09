import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ID } from './App';

type Props = {
  navigation: any;
  userPass: ID;
  setUserPass: React.Dispatch<React.SetStateAction<ID>>;
};

const LoginScreen: FunctionComponent<Props> = ({
  navigation,
  userPass,
  setUserPass,
}) => {
  const Authenticate = ({ Username, Password }: ID) => {
    if (Username == 'BlackboardCrew' && Password == 'crunch22') {
      navigation.navigate('HomeDrawer');
    } else {
      alert('Incorrect Username or Password');
    }
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('./assets/chalkboard-background.jpeg')}
        > */}
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.title}>Blackboard</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={userPass.Username}
        onChangeText={(user) =>
          setUserPass({ Username: user, Password: userPass.Password })
        }
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={userPass.Password}
        secureTextEntry
        onChangeText={(pass) =>
          setUserPass({ Username: userPass.Username, Password: pass })
        }
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => Authenticate(userPass)}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => alert('Signup not available for demo.')}>
          <Text style={styles.btnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1919',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    fontFamily: 'Billabong',
    fontWeight: 'bold',
    fontSize: 80,
    color: '#f8f8f8',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: '#F5FFFA',
    padding: 15,
    width: '45%',
  },
  btnTxt: {
    fontSize: 16,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});
