import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Header from '../components/header';
import FlatList from 'react-native/Libraries/CustomComponents/Lists/FlatList';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  },
});

export default class ShopCart extends Component {
  render() {
    const { navigator } = this.props;

    const dataSource = [];
    for (let i = 0 ; i <= 3000 ; i ++) {
      dataSource.push({key:i})      
    }

    return (
      <View style={styles.root}>
        <Header navigator={navigator}/>
        <FlatList
          data={dataSource}
          renderItem={({item}) => {
           return (<View>
              <Text style={{height:30}}>{'这是第' + item.key + '数据'}</Text>
              <Image source={require('../yay.jpg')} style={{height:30,width:30}}/>
            </View>)
          }}
          getItemLayout={(data, index) => ( {length: 30, offset: 30 * index, index} )}
        />
      </View>
    );
  }
}
