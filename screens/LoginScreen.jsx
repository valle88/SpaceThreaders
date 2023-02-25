import { View, Pressable, StyleSheet, Text } from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.Container}>
          <Pressable style={styles.login} onPress={() => navigation.navigate('Conect')}><Text>Login</Text></Pressable>
            <Pressable style={styles.register} onPress={() => navigation.navigate('SignUp')}><Text>Register</Text></Pressable>
          </View>
        </View>
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
    Container: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: '25%',
      width: 300,
      height: 200
    },
    login: {
      padding: 20,
      backgroundColor: 'purple',
      borderRadius: 10,
      borderWidth: 1
    },
    register: {
      padding: 20,
      backgroundColor: 'blue',
      borderRadius: 10,
      borderWidth: 1
    },
   
  });

export default LoginScreen