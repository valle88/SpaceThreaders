import { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, ImageBackground } from 'react-native';
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
    <ImageBackground source={require("../assets/crewDragen.jpg")} resizeMode="stretch">
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textBold}>Porfavor introduzca su Token</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeText}
          value={text} 
        />
        <Pressable style={styles.loginBtn} onPress={() => handleLogin()}><Text>Login</Text></Pressable>
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
  formContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '25%',
    width: 300,
    height: 200
  },
  inputContainer: {
    width: '75%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    padding: 3
  },
  loginBtn: {
    padding: 15,
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    borderWidth: 1
  },
  textBold: {
    fontWeight: 'bold'
  }
});

export default SignInScreen;