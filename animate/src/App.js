import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Navigator,
  Text,
  Animated,
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),//设置初始值
      carAnim: new Animated.Value(0),
    };
  }
 componentDidMount() {

  Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
    Animated.timing(this.state.anim, {
             toValue: 1,   
             duration:1000,
           }),
    Animated.timing(this.state.carAnim, {
             toValue:1,
             duration:200,
    }),
    Animated.spring(this.state.carAnim, {
             toValue:0,
             friction:3,
    })
  ]).start();                    // 执行这一整套动画序列

  }

  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{backgroundColor:'red',width:40,height:40,
                                opacity: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [1, 0],
                                  }),
                                transform: [   
                                 {scale: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [1, 0.5],
                                  })},
                                 {translateY: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [0, -500],
                                 })},
                                {translateX: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [0, 200],
                                 })},
                                 {rotate: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [
                                     '0deg', '720deg'
                                   ],
                                 })},
                                 ]}} />
        <Animated.View style={{backgroundColor:'black',
                                width:this.state.carAnim.interpolate({
                                  inputRange:[0,1],
                                  outputRange:[40,50],
                                }),
                                height:this.state.carAnim.interpolate({
                                  inputRange:[0,1],
                                  outputRange:[40,30],
                                }),}} />
      </View>
    );
  }
}