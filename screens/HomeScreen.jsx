import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import spaceTradersServices from "../services/spaceTraders";
import { TextInput } from "react-native-gesture-handler";

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
      
        {!profile ? <Text>Buscando datos...</Text> : <Text>Usuario: {profile.user.username}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text>Número de naves: {profile.user.shipCount}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text>Número de estructuras: {profile.user.structureCount}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text>Créditos: {profile.user.credits}</Text>}
        {!profile ? <Text>Buscando datos...</Text> : <Text>Se unió en: {profile.user.joinedAt}</Text>}
     

    </View>
  );
};
const styles = StyleSheet.create({
  centrar: {
    padding:10,
    margin: '20%'
  }
})
export default HomeScreen;