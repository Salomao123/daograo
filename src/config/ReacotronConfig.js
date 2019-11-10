import Reactotron from "reactotron-react-native";

import { reactotronRedux } from "reactotron-redux";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "10.2.206.108" })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
