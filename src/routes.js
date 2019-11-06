import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import Icon from "react-native-vector-icons/FontAwesome";

//pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Venda from "./pages/Venda";
import Orcamento from "./pages/Orcamento";
import Lucro from "./pages/Lucro";

const Drawer = createDrawerNavigator(
  {
    Login: { screen: Login },
    Main: createStackNavigator({
      Dashboard: {
        screen: Dashboard,
        navigationOptions: {
          headerRight: ({ ...props }) => (
            <Icon
              name="bars"
              color={"#000"}
              size={20}
              style={{ marginHorizontal: 10 }}
              onPress={() => props.navigation.openDrawer()}
            />
          ),
          headerTitle: "Página Principal"
        }
      }
    }),
    Venda: { screen: Venda },
    Lucro: { screen: Lucro },
    Orcamento: { screen: Orcamento }
  },
  {
    drawerPosition: "right"
  }
);

export default createAppContainer(Drawer);
