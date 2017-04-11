import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Item from './item';
const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});



export default class ItemList extends Component {
  render() {
    const { cartData } = this.props;
    console.log(cartData.data.slice(0));
    return (
      <ScrollView style={styles.root}>
        {
          cartData.data.slice(0).map((data, index) => {
            console.log(1111)
            return <Item key={data.id} index={index} data={data} cartData={cartData} />
          })
        }
      </ScrollView>
    );
  }
}
