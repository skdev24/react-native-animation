import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Opacity extends Component {
  state = {
    animation: new Animated.Value(1),
    backgroundColor: 'green',
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 300,
    }).start(() => {
      this.setState({
        backgroundColor: `rgb(${Math.random() * (255 - 0) + 0},${Math.random() *
          (255 - 0) +
          0},${Math.random() * (255 - 0) + 0})`,
      });
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500,
      }).start();
    });
  };

  render() {
    const { backgroundColor, animation } = this.state;
    const opacity = animation;
    return (
      <>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.animatedView, { opacity, backgroundColor }]}
          />
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export const styles = StyleSheet.create({
  animatedView: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    borderRadius: 50,
    shadowColor: `rgb(${Math.random() * (255 - 0) + 0},${Math.random() *
      (255 - 0) +
      0},${Math.random() * (255 - 0) + 0})`,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
  },
});
