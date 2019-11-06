import React from "react";

import { View, Text, SafeAreaView } from "react-native";

import styles from "./styles";

function Header() {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Minhas atividades</Text>
    </View>
  );
}

export default Header;
