import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { styles } from './Opacity';

export default class TranslationPosition extends Component {
  state = {
    backgroundColor: 'blue',
    animation: new Animated.Value(0),
  };

  startAnimation = () => {};

  render() {
    const { backgroundColor } = this.state;
    return (
      <>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.animatedView, { backgroundColor }]} />
        </TouchableWithoutFeedback>
      </>
    );
  }
}
