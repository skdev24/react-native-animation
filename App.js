import React from 'react';
import { StyleSheet, View } from 'react-native';
import TranslationPosition from './components/TranslationPosition';
import Opacity from './components/Opacity';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Opacity />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed484d',
    justifyContent: 'center',
    // justifyContent: 'flex-end', //For Tabbar
  },
});
