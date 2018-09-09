import React from "react";
import { OrientationChangeProvider } from "react-native-orientation-change-provider";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./App.container";
import { tabs } from "./reducers";

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
