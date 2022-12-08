import * as React from 'react';
// import { Button } from 'react-native-paper';
import {StyleSheet, Pressable, Text } from "react-native";
import MainColors from '../colors';


const tag = (props) => (
  <Pressable style={styles.button}>
    <Text style={styles.text}>{props.tag}</Text>
  </Pressable>

);

const styles = StyleSheet.create({
  contentStyle:{
      width: '10%',
      height: 20,
      backgroundColor: MainColors.Goldenrod,
    }, 
  text: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 12,
    elevation: 1,
    backgroundColor: MainColors.Indigo,
  },

  tag: {
    fontWeight: 'bold',
    letterSpacing: 0.25,
    
  }
})

export default tag;
