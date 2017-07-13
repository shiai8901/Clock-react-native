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
import LinearGradient from 'react-native-linear-gradient';


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
        <LinearGradient colors={['#2a1e50', '#DC545E']} style={styles.container}>
            <View style={styles.box}>
              <Text style={styles.welcome}>Current time is</Text>
              <Text style={styles.time}>{this.state.hour} : {this.state.minutes} : {this.state.seconds}</Text>
            </View>
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient colors={['#2a1e50', '#DC545E']} style={styles.container}>
          <Text style={styles.welcome}>
            Welcome
          </Text>
        </LinearGradient>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor:'transparent',
    margin: 10,
  },
  time: {
    fontSize: 56,
    color: '#fff',
    backgroundColor:'transparent',
  }
});

AppRegistry.registerComponent('App', () => App);
