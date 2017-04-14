import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text
} from 'react-native';

import ShopCar from '../logics/carDara';
import Header from '../components/header';
import ItemList from '../components/itemlist';
import Footer from '../components/footer';
import {observer} from 'mobx-react/native'


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  },
});

export default class ShopCart extends Component {
  render() {
    const { navigator } = this.props;
    cartData = new ShopCar()
    console.log(cartData.data)
    console.log(cartData.data.slice(0))
    return (
      <View style={styles.root}>
        <Header navigator={navigator}/>
        <ItemList cartData={cartData} />
        <Footer cartData={cartData} />
      </View>
    );
  }
}
