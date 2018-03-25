import React from "react";
import { OrientationChangeProvider } from "react-native-orientation-change-provider";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { tabs } from "./reducers";
import App from "./App.container";

const store = createStore(combineReducers({ tabs }));

const Wrapper = props => {
  return (
    <Provider store={store}>
      <OrientationChangeProvider>
        <App />
      </OrientationChangeProvider>
    </Provider>
  );
};

export default Wrapper;