import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SocialMedia from '../components/socialIcon';

export default function containerA() {
  const styles = StyleSheet.create({
    containerA: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      //alignItems: 'center',
    },

    containerA1: {
      fontSize: 90,
      color: '#fff',
      justifyContent: 'flex-start',
      fontFamily: 'Courier Prime',
    },
    containerA2: {
      fontSize: 40,
      color: '#fff',
      justifyContent: 'flex-start',
      fontFamily: 'Courier Prime',
    },
    containerA3: {
      fontSize: 75,
      color: '#fff',
      justifyContent: 'flex-start',
      fontFamily: 'Architects Daughter',
    },
    containerA4: {
      fontSize: 50,
      justifyContent: 'flex-start',
      color: '#fff',
    },
    fontType1: {
      color: '#fff',
      fontFamily: 'Amarante',
    },
    fontType2: {
      color: '#fff',
      fontFamily: 'Barlow',
    },
    fontType3: {
      color: '#fff',
      fontFamily: 'Azeret Mono',
    },
    yellowText: {
      color: '#FCC133', // Style for other letters
    },
  });

  return (
    <View>
      <View style={styles.containerA}>
        <Text style={styles.containerA1}>
          <Text style={styles.yellowText}> H</Text>
          <Text style={styles.containerA1}>ello</Text>
          <Text style={styles.yellowText}>,</Text>
        </Text>

        <Text style={styles.containerA2}>
          <Text style={styles.containerA2}> It</Text>
          <Text style={styles.yellowText}>'</Text>
          <Text style={styles.containerA2}>s Me</Text>
        </Text>
        <Text style={styles.containerA3}>
          <Text style={styles.yellowText}> S</Text>
          <Text style={styles.containerA3}>asindu </Text>
          <Text style={styles.yellowText}>D</Text>
          <Text style={styles.containerA3}>ilhara</Text>
          <Text style={styles.yellowText}>.</Text>
        </Text>
        <Text style={styles.containerA4}>
          <Text style={styles.fontType1}> and </Text>
          <Text style={styles.fontType2}> I'm a </Text>
          <Text style={styles.fontType3}> Web Developer</Text>
        </Text>
      </View>
      <View><SocialMedia /></View>
    </View>
  );
}
