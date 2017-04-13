import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Navigator,
  Text,
} from 'react-native';

import Index from './pages/main';

const INITIAL_ROUTE = {
  component: Index,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
});

export default class App extends Component {
  renderScene = (route, navigator) => {
    const Comp = route.component;
    return (
      <Comp navigator={navigator} route={route} />
    );
  };
  render() {
    return (
      <View style={styles.root}>
        <Navigator
          initialRoute={INITIAL_ROUTE}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}
