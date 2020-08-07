import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type ID = {
  Username: string;
  Password: string;
};
const LoginScreen: FunctionComponent<any> = ({ navigation }) => {
  const Authenicate = ({ Username, Password }: ID) => {
    if (Username == 'RyansMaster' && Password == 'crunch22') {
      navigation.navigate('HomeDrawer');
    } else {
      alert('Incorrect Username or Password');
    }
  };
  const [userPass, setUserPass] = React.useState({
    Username: '',
    Password: '',
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={(user) =>
          setUserPass({ Username: user, Password: userPass.Password })
        }
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        onChangeText={(pass) =>
          setUserPass({ Username: userPass.Username, Password: pass })
        }
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => Authenicate(userPass)}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => alert('Signup not available for demo.')}
        >
          <Text style={styles.btnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: '#FFD700',
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
