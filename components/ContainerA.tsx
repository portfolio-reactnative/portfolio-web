import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Intro from './Intro';

export default function containerA() {
  const styles = StyleSheet.create({
    containerA: {
      //backgroundColor: 'red',
      flex: 1,
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:"center"
    },

    containerA1: {
      fontSize:40,
      color:'#fff',
      fontFamily:"Courier Prime",

      
    },
    containerA2: {
      fontSize:30,
      color:'gold',
    },
    containerA3: {
      fontSize:50,
      color:'#fff',
    },
    containerA4: {
      fontSize:25,
      color:'#fff',
      
    },
    letterH: {
      color: 'red', // Change the color here
    },

    
  });
  const splitHello = "Hello,".split('H');
  
  return (
    <View style={styles.containerA}>
      <View>
      <Text style={styles.containerA1}>
        {splitHello[0]}
        <Text style={styles.letterH}>H</Text>
        {splitHello[1]}
      </Text>
      
      <Text style={styles.containerA2} >It's me</Text>
      <Text style={styles.containerA3} >Sasindu Dilhara</Text>
      <Text style={styles.containerA4} >And I'm a Web Developer</Text>
      </View>
    </View>
  );
}
