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
              <Text style={styles.time}>{this.state.hour} : {this.state.minutes}</Text>
            </View>
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient colors={['#2a1e50', '#DC545E']} style={styles.container}>
          <Text style={styles.time}>
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
  box: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,.3)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 56,
    color: '#fff',
    fontFamily: 'sans-serif-thin',
    backgroundColor:'transparent',
  }
});

AppRegistry.registerComponent('App', () => App);
