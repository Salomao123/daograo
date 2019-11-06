import React from "react";

import { Text, View, StyleSheet } from "react-native";

class Lucro extends React.Component {
  static navigationOptions = {
    drawerLabel: "Lucro"
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };

  render() {
    return <Text>Lucro</Text>;
  }
}

export default Lucro;
