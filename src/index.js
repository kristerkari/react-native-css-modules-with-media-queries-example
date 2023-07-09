import React from 'react';
import {OrientationChangeProvider} from 'react-native-orientation-change-provider';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import App from './App.container';
import {tabs} from './reducers';

const store = configureStore({
  reducer: {
    tabs,
  },
});

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
