import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { css } from "../assets/css/Css";

export default function Login() {
  const [display, setDisplay] = useState("none");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[css.container, css.darkbg]}
    >
      <View style={css.login__logoMarca}>
        <Image
          style={css.login__logoMarcaImage}
          source={require("../assets/img/logoMarca.png")}
        />
      </View>

      <View>
        <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
      </View>

      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder="Usuário:" />
        <TextInput
          style={css.login__input}
          placeholder="Senha:"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={css.login__button}
          onPress={() => setDisplay("flex")}
        >
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
