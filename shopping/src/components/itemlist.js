import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
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
    return (
      <ScrollView style={styles.root}>
        {
          cartData.map((data, index) => {
            return <Item key={data.id} index={index} data={data} cartData={cartData} />
          })
        }
      </ScrollView>
    );
  }
}
