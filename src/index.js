import "./config/ReactotronConfig";

import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Routes from "./routes";

function Main() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default Main;
