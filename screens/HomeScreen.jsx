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
      <Text>Usuario: {profile.user.username}</Text>
      <Text>Número de naves: {profile.user.shipCount}</Text>
      <Text>Número de estructuras: {profile.user.structureCount}</Text>
      <Text>Créditos: {profile.user.credits}</Text>
      <Text>Se unió en: {profile.user.joinedAt}</Text>
    
    </View> 
  );
};

export default HomeScreen;