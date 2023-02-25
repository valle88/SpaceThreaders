
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreditScreen = ({userToken}) => {
  
    const navigation = useNavigation();
    const [credit, setCredit] = useState({
      amount: "",
      rate: "",
      termInDays: "",
      type: "",
    });
    useEffect(() => {
      fetch(`https://api.spacetraders.io/types/loans?token=${userToken}`)
        .then((res) => res.json())
        .then((data) => {
          setCredit(data.credit[0]);
        })
        .catch((err) => console.log(err));
    }, [userToken]);

    const handleTakeOutCredit = () => {
      fetch(`https://api.spacetraders.io/my/loans?token=${userToken}&type=STARTUP`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error.code === 422) {
            alert("Es un prestamo a la vez");
          } else if (data.error) {
            alert("Ops, Hay un error");
          }

          navigation.navigate("Home");
        })
        .catch((err) => console.log(err));
    };


    return (
      <View style= {styles.centrar}>
        <Text>Credito disponible</Text>
        <View>
          <Text>{credit.amount} crd</Text>
          <Text>Rate: {credit.rate}%</Text>
          <Text>Term: {credit.termInDays} days</Text>
          <Text>Type: {credit.type}</Text>
          <Button style={styles.button} title="Take out" onPress={handleTakeOutCredit} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    centrar: {
      padding:10,
    },
    button:{
      width: '40%',
      height: '40%',
    }

  })

  export default CreditScreen;