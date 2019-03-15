import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from 'react-native';
import * as shape from 'd3-shape';
import { Svg } from 'expo';

import StaticTabbar from './StaticTabbar';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get('window');
const height = 64;
const { Path } = Svg;
const tabs = [
  {
    name: 'grid',
  },
  {
    name: 'list',
  },
  {
    name: 'repeat',
  },
  {
    name: 'map',
  },
  {
    name: 'user',
  },
];
const tabWidth = width / tabs.length;
const backgroundColor = 'white';

const getPath = () => {
  const left = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([{ x: 0, y: 0 }, { x: width, y: 0 }]);
  const tab = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)
    .curve(shape.curveBasis)([
    { x: width - 10, y: 0 },
    { x: width - 5, y: 0 },
    { x: width + 5, y: 2 },
    { x: width + 10, y: height - 20 },
    { x: width + tabWidth - 10, y: height - 20 },
    { x: width + tabWidth - 5, y: 2 },
    { x: width + tabWidth + 5, y: 0 },
    { x: width + tabWidth + 10, y: 0 },
  ]);
  const right = shape
    .line()
    .x(d => d.x)
    .y(d => d.y)([
    { x: width + tabWidth, y: 0 },
    { x: width * 2, y: 0 },
    { x: width * 2, y: height },
    { x: 0, y: height },
    { x: 0, y: 0 },
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();

// eslint-disable-next-line react/prefer-stateless-function
export default class Tabbar extends React.PureComponent {
  value = new Animated.Value(0);

  render() {
    const { value } = this;
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0],
    });
    return (
      <>
        <View {...{ height, width }}>
          <AnimatedSvg
            width={width * 2}
            {...{ height }}
            style={{ transform: [{ translateX }] }}
          >
            <Path fill={backgroundColor} {...{ d }} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar {...{ tabs, value }} />
          </View>
        </View>
        <SafeAreaView style={styles.container} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor,
  },
});
