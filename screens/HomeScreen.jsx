import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

import spaceTradersServices from "../services/spaceTraders";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const HomeScreen = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fecthUserAccount = async () => {
      const userProfile = await spaceTradersServices.getUserProfile();
      setProfile(userProfile);
    };

    fecthUserAccount();

  }, []);

  return (
    <ImageBackground source={require("../assets/home.jpg")} resizeMode="stretch">
      <View style={styles.centrar}>

        {!profile ? <Text>Buscando datos...</Text> : <Text style={styles.text}>Usuario: {profile.user.username}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text style={styles.text}>Número de naves: {profile.user.shipCount}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text style={styles.text}>Número de estructuras: {profile.user.structureCount}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text style={styles.text}>Créditos: {profile.user.credits}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text style={styles.text}>Se unió en: {profile.user.joinedAt}</Text>}


      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  centrar: {
    padding: 10,
    margin: '20%',
    
  },
  text:{
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',

  }
})
export default HomeScreen;