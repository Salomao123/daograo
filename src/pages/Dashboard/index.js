import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Text, View } from "react-native";

//components
import ThumbSaldo from "../../components/ThumbSaldo";
import BodyMenu from "../../components/BodyMenu";

class Dashboard extends Component {
  static navigationOptions = {
    drawerLabel: "Main"
    // drawerIcon: ({ tintColor }) => (
    //     <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //     />
    // ),
  };

  render() {
    return (
      <>
        <ThumbSaldo />
        <BodyMenu />
      </>
    );
  }
}

export default Dashboard;
