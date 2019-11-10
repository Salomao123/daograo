import React, { useState } from "react";

import api from "../../services/api";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import styles from "./styles";

import { connect } from "react-redux";

function Login({ estado }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  entrar = async () => {
    const response = await fetch("/authentication", {
      username,
      password
    });

    console.tron.log({ response });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daograu</Text>

      <Text style={styles.subtitle}>
        Você pode usar isso para todos os produtos da Daograu
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={valor => setUsername(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={valor => setPassword(valor)}
      />

      <TouchableOpacity style={styles.btn_entrar} onPress={() => this.entrar()}>
        <Text style={styles.btnText}>ACESSAR</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <View style={styles.traco}></View>
        <Text style={styles.textSection}>OU</Text>
        <View style={styles.traco}></View>
      </View>

      <Text
        style={styles.link}
        onPress={() => alert("Ainda não implementado!")}
      >
        Esqueci meu usuário ou senha.
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  estado: state
});

export default connect(mapStateToProps)(Login);
