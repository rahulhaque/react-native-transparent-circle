import React from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import { Svg, Defs, Rect, Mask, Circle } from 'react-native-svg';

const SvgCircle = (props) => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Circle
            r="25%"
            cx="50%"
            cy="50%"
            fill="black"
          />
        </Mask>
      </Defs>
      <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.8)" mask="url(#mask)" fill-opacity="0" />
    </Svg>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/image.jpg')} style={styles.image}>
        <SvgCircle />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default App;
