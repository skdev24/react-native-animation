import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


import TranslationPosition from './components/TranslationPosition';
import Tabbar from './components/Tabbar/Tabbar';
import Opacity from './components/Opacity';

const {width, height} = Dimensions.get('window')

const AnimationComponent = [
  {
    key: 1,
    componentName: 'Tabbar'
  },
  {
    key: 2,
    componentName: "Opacity"
  },
  {
    key: 3,
    componentName: "TranslationPosition"
  },
]
class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.text}>Animation Example</Text>
        </View>
        <View style={styles.listsStyle}>
        {
          AnimationComponent.map((item,index) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate(`${item.componentName}`)
            }} style={styles.list} key={index}>
                <Text style={{fontSize: 16}}>{`${index + 1}: ${item.componentName}`}</Text>
            </TouchableOpacity>
          ))
        }
        </View>
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  Tabbar,
  Opacity,
  TranslationPosition
}, {
  headerMode: 'none'
});


export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b3cc'
  },
  mainView: {
    position: 'absolute',
    top: 0,
    right: -30,
    left: -30,
    height: 150,
    backgroundColor: 'blue',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  text: {
    position: 'absolute',
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 60,
    fontWeight: '700',
  },
  listsStyle: {
    alignSelf: 'center',
    marginTop: 110
  },
  list: {
    width: width - 50,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    paddingLeft: 20
  }
});
