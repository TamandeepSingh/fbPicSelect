/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FBSDK , { LoginManager } from 'react-native-fbsdk';
import {Actions, Router, Scene} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import MainPage from './mainPage';
import ShowPics from './selectHere';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Hello!
        </Text>
      </View>*/
      <Router>
        <Scene key = "root" >
          <Scene key = "home" component = {MainPage} title="Home" initial />
          <Scene key = "anotherpage" component = {ShowPics} title="Welcome" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
