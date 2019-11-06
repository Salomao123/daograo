import React from "react";

import { Text, View } from "react-native";

class Orcamento extends React.Component {
  static navigationOptions = {
    drawerLabel: "Orcamento"
    // drawerIcon: ({ tintColor }) => (
    //     <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //     />
    // ),
  };
  render() {
    return <Text>Orcamento</Text>;
  }
}

export default Orcamento;
