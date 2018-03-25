import "./src/icomoon.js";

import { AppRegistry } from "react-native";
import App from "./src/index";

AppRegistry.registerComponent("TestMediaQueries", () => App);
AppRegistry.runApplication("TestMediaQueries", {
  rootTag: document.getElementById("react-app"),
});

if (module.hot) {
  module.hot.accept();
}
