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
import SegmentControl from "./Segment"
var full_width = Dimensions.get('window').width
const titleList=["第一份","第二份","第三份"]
export default class Segment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SegmentControl 
          style = {{width:full_width,height:40,backgroundColor:'#fff',flexDirection:'row'}}
          titleArray = {titleList}
          exchange = {(msg)=>this.exchange(msg)}
        />
      </View>
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

AppRegistry.registerComponent('Segment', () => Segment);
