import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  ListView,Image
} from 'react-native';

import Header from '../components/header';
import FlatList from 'react-native/Libraries/CustomComponents/Lists/FlatList';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  },
});

export default class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = [];
    for (let i = 0 ; i <= 3000 ; i ++) {
      dataSource.push({key:i})      
    }
    this.state = {
      dataSource: ds.cloneWithRows(dataSource)
    };
  }

  render() {
    const { navigator } = this.props;


    return (
      <View style={styles.root}>
        <Header navigator={navigator}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <View>
                <Text style={{height:30}}>{'这是第' + rowData.key + '数据'}</Text>
                <Image source={require('../yay.jpg')} style={{height:30,width:30}}/>
              </View>)}}
        />
      </View>
    );
  }
}
