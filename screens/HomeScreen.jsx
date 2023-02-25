import { View, Text } from "react-native";
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
    <View>
      {!profile ? <Text>Buscando datos...</Text> : <Text>Usuario: {profile.user.username}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Número de naves: {profile.user.shipCount}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Número de estructuras: {profile.user.structureCount}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Créditos: {profile.user.credits}</Text>}
      {!profile ? <Text>Buscando datos...</Text> : <Text>Se unió en: {profile.user.joinedAt}</Text>}
    </View> 
  );
};

export default HomeScreen;