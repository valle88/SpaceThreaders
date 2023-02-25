import { View, Pressable, StyleSheet, Text, ImageBackground } from "react-native";

const LoginScreen = ({ navigation }) => {
 
  return (
    <ImageBackground source={require("../assets/fondo.png")} resizeMode="stretch">
    <View style={styles.container}>
      
        <View style={styles.Container1}>
          <Pressable style={styles.login} onPress={() => navigation.navigate('ConectScreen')}><Text>Login</Text></Pressable>
          <Pressable style={styles.register} onPress={() => navigation.navigate('SignUp')}><Text>Register</Text></Pressable>
        </View>
     

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textBold: {
    fontWeight: 'bold'
  },
  Container1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '80%',
    width: 300,
    height: 200
  },
  login: {
    width: 150,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4896EE',
    borderRadius: 10,
    borderWidth: 1
  },
  register: {
    padding: 20,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#F78826',
    borderRadius: 10,
    borderWidth: 1,


  },

});

export default LoginScreen