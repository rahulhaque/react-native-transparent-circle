import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
  Dimensions
} from 'react-native';
import { Svg, Defs, Rect, Mask, Circle } from 'react-native-svg';

const { height, width } = Dimensions.get('screen');

const SvgCircle = (props) => {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="#fff" />
          <Circle
            r={`${props.radius}%`}
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

  const [radius, setRadius] = useState(15)

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/image.jpg')} style={styles.image}>
        <SvgCircle radius={radius} />
      </ImageBackground>
      <View
        style={{ flexDirection: 'row' }}
      >
        <View style={{ flex: 1 }}>
          <Button title="+ Expand" onPress={() => setRadius(radius + 5)} />
        </View>
        <View style={{ flex: 1 }}>
          <Button title="- Shrink" onPress={() => setRadius(radius - 5)} />
        </View>
      </View>
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
