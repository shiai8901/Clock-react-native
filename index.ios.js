/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.setTimeinState = this.setTimeinState.bind(this);
  }

  componentWillMount() {
    setInterval(this.setTimeinState, 1000);
  }

  setTimeinState() {
    const now = new Date();
    const seconds = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
    const minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
    const hour = now.getHours();
    this.setState({
      hour: hour,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    if (this.state) {
      return (
        <View style={styles.container}>
            <View style={styles.box}>
              <Text style={styles.welcome}>Current time is</Text>
              <Text style={styles.time}>{this.state.hour} : {this.state.minutes} : {this.state.seconds}</Text>
            </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome
          </Text>
        </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  time: {
    fontSize: 36,
    color: '#333',
    minWidth:180,
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
    borderColor: '#bababa'
  }
});

AppRegistry.registerComponent('App', () => App);
