/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Game from './src/game/components/Game';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Game />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;