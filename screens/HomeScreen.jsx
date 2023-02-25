import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

import spaceTradersServices from "../services/spaceTraders";


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
   
      <View style={styles.centrar}>

        {!profile ? <Text style={styles.text}>Buscando datos...</Text> : <Text style={styles.text}>Usuario: {profile.user.username}</Text>}
        {!profile ? <Text style={styles.text}>Buscando datos...</Text> : <Text style={styles.text}>Número de naves: {profile.user.shipCount}</Text>}
        {!profile ? <Text style={styles.text}>Buscando datos...</Text> : <Text style={styles.text}>Número de estructuras: {profile.user.structureCount}</Text>}
        {!profile ? <Text style={styles.text}>Buscando datos...</Text> : <Text style={styles.text}>Créditos: {profile.user.credits}</Text>}
        {!profile ? <Text style={styles.text}>Buscando datos...</Text> : <Text style={styles.text}>Se unió en: {profile.user.joinedAt}</Text>}


      </View>
   
  );
};
const styles = StyleSheet.create({
  centrar: {
    padding: 10,
    margin: '20%',
    
  },
  text:{
    color: '#FBFBFB',
    fontSize: '20px',
    

  }
})
export default HomeScreen;