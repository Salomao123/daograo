import React from "react";

import { View, Text } from "react-native";

class Venda extends React.Component {
  static navigationOptions = {
    drawerLabel: "Venda"
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };

  render() {
    return <Text>Venda</Text>;
  }
}

export default Venda;
