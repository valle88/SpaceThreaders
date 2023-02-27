import { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';
import spaceTraders from '../services/spaceTraders';

const SignInScreen = ({ setSignIn }) => {
  const [text, onChangeText] = useState('');

  const handleLogin = async () => {
    try {
      const userProfile = await spaceTraders.getUserProfile();
      setSignIn(userProfile);

      alert(`User: ${userProfile.user.username}\nInicio de sesión con éxito`)

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <ImageBackground source={require("../assets/home.jpg")} resizeMode="stretch">
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Porfavor introduzca su Token</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text} 
        />
        <Pressable style={styles.login} onPress={() => handleLogin()}><Text>Login</Text></Pressable>
      </View>
    </View>
    </ImageBackground >
  ); 
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '25%',
    width: 300,
    height: 200
  },
  input: {
    width: '75%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    padding: 3
  },
  login: {
    padding: 15,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 23,
    color: 'white',
  }
});

export default SignInScreen;