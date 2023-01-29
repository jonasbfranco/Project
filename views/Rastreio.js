import React from "react";
import { Text, View, Button } from "react-native";

export default function Rastreio({ navigation }) {
  return (
    <View>
      <Text>Esse é o componente Rastreio</Text>
      <Button
        title="Ir para Rastreio"
        onPress={() =>
          navigation.navigate("Rastreio", {
            id: 30,
          })
        }
      />
    </View>
  );
}
