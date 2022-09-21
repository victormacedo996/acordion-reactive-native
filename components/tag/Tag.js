import * as React from 'react';
import { Button} from 'react-native-paper';
import {StyleSheet} from "react-native";
import MainColors from '../colors';
const tag = () => (
  <>
  <Button mode="elevated" onPress={() => console.log('Pressed')} contentStyle={styles.text}>
   TAG
  </Button>
    <Button mode="elevated" onPress={() => console.log('Pressed')} contentStyle={styles.contentStyle}>
    TAG
   </Button>
   </>

);

const styles = StyleSheet.create({
  contentStyle:{
      width: '10%',
      height: 20,
      backgroundColor: MainColors.Goldenrod,
      
  }, 
  text:{
    fontSize: 60,
    textDecorationColor: MainColors.Indigo,
  },
})

export default tag;
