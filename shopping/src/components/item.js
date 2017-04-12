import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import Circle from './circle';

import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 100,
  },
  img: {
    width: 90,
    height: 90,
  },
  content: {

  },
  price: {

  },
  name: {
    width: 180,
    fontSize: 16,
  },
  priceAndControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
  },
  buttonText: {

  },
});

@observer
export default class Item extends Component {
  check = (checked) => {
    const { index, cartData } = this.props;
    cartData.check(index, checked);
  };
  minus = () => {
    const { index, data: { count }, cartData } = this.props;
    if (count > 1) {
      cartData.minus(index);
    }
  };
  plus = () => {
    const { index, cartData } = this.props;
    cartData.plus(index);
  };
  render() {
    const { index, data: { cartNo, prodName, standard, count, oldPrice, nowPrice,imgUrl,brcProdNo,skuNo,prodNo } } = this.props;
    console.log('更新数据' + index)
    return (
      <View style={styles.root}>
        <Circle onPress={this.check} />
        <Image style={styles.img} source={{uri: imgUrl}} />
        <View style={styles.content}>
          <Text style={styles.name}>{prodName}</Text>
          <View style={styles.priceAndControls}>
            <Text style={styles.price}>￥{oldPrice}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.minus}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.plus}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
