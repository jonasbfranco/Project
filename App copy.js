import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Alert } from "react-native";
import Page from "./views/Page";
import { css } from "./assets/css/Css";

export default function App() {
  const [product, setProduct] = useState("bola");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity > 0) {
      Alert.alert("Novo produto foi adicionado");
    }
  }, [quantity]);

  const props = {
    empresa: "JLOG",
    nome: "Jonas",
    produto: product,
    quantidade: quantity,
  };

  return (
    <View style={css.container}>
      <Text>{product}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Page {...props} />
      <Button
        title="Adicionar produto"
        onPress={() => setQuantity(quantity + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
