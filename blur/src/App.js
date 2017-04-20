import React, { Component } from 'react';
import { View, Image, Text, findNodeHandle, StyleSheet,Dimensions,TextInput,Animated,TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'react-native-blur';

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  input:{
    position: "absolute",
    top: 100, left: 80, bottom: 0, right: 0,
    width:width-160,
    height:40,
    backgroundColor:'white',
  },
  input2:{
    position: "absolute",
    top: 150, left: 80, bottom: 0, right: 0,
    width:width-160,
    height:40,
    backgroundColor:'white',
    marginTop:20
  }
});

const SPRING_CONFIG = {duration:2000,delay:500};
const SQUARE_DIMENSIONS = 10;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      viewRef: null,
      text1: '输入用户名',
      text2: '输入密码',
      anim: new Animated.Value(0),//设置初始值
      anim2: new Animated.Value(0),//设置初始值
      imageAnim: new Animated.ValueXY,
      canEdit1:0,
      canEdit2:1,
    };

  }

  componentDidMount(){
    this.triggerAnimation();
  }

  triggerAnimation() {
    Animated.parallel([
      Animated.sequence([
            Animated.timing(this.state.imageAnim, {
                ...SPRING_CONFIG,
                toValue: {x: 0, y: SQUARE_DIMENSIONS} //animate to bottom left
            }),
            Animated.timing(this.state.imageAnim, {
              ...SPRING_CONFIG,
              toValue: {x: SQUARE_DIMENSIONS, y: SQUARE_DIMENSIONS} // animated to bottom right
            }),
            Animated.timing(this.state.imageAnim, {
                ...SPRING_CONFIG,
                toValue: {x: SQUARE_DIMENSIONS, y: 0} //animate to top right
            }),
            Animated.timing(this.state.imageAnim, {
              ...SPRING_CONFIG,
              toValue: {x: 0, y: 0} // return to start
            })
        ])
      ]).start(this.triggerAnimation.bind(this));
    }

  scaleView(){
    const itStatus =  this.state.anim2._value;
    console.log('下' +  itStatus);

    if(itStatus != 0){
      this.view2(0);
    }

    if(this.state.anim._value == 0){
      this.view1(1);
    }

    if(this.state.anim._value == 1){
      this.view1(0);
    }
  }

  view1(value){
    Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
      Animated.spring(this.state.anim, {
        toValue: value,
        friction:5,
        tension:30,
      }),
    ]).start(
      this.setState({
        canEdit1:value,
      })
    );                    // 执行这一整套动画序列
  }

  view2(value){

    Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
      Animated.spring(this.state.anim2, {
        toValue: value,
        friction:5,
        tension:30,
      }),
    ]).start(
    this.setState({
        canEdit2:value,
      })
    );                    // 执行这一整套动画序列
  }

  scaleView2(){
    const seStatus =  this.state.anim._value;
    console.log('上' + seStatus);
    if(seStatus != 0){
      this.view1(0);
    }
    if(this.state.anim2._value == 0){
      this.view2(1);
    }

    if(this.state.anim2._value == 1){
      this.view2(0);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          ref={(img) => { this.backgroundImage = img; }}
          source={require('./test.jpg')}
          style={{width:(width+100),height:(height+100),
                              transform:this.state.imageAnim.getTranslateTransform(),
        }}
        />
        <BlurView
          style={styles.absolute}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
        />

        <TouchableWithoutFeedback onPress={this.scaleView.bind(this)}>
          <Animated.View style={[styles.input,
                                {transform: [
                                 {scale: this.state.anim.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [1, 1.5],
                                  })},
                                 ]}]}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text1:text})}
            value={this.state.text1}
            editable={this.state.canEdit1}
            onEndEditing={this.scaleView.bind(this)}
          />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.scaleView2.bind(this)}>
          <Animated.View style={[styles.input2,
                                {transform: [
                                 {scale: this.state.anim2.interpolate({
                                   inputRange: [0, 1],
                                   outputRange: [1, 1.5],
                                  })},
                                 ]}]}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text2:text})}
              value={this.state.text2}
              editable={this.state.canEdit2}
              onEndEditing={this.scaleView2.bind(this)}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}