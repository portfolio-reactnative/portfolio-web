import React from 'react';
import { StyleSheet, View} from 'react-native';
import BtnComponent from './BtnComponents';
import Picture from './Picture';

export default function containerB() {
  const styles = StyleSheet.create({
    containerB: {
      flex: 1,
      flexDirection: 'column',
    },
    containerB1: {
      flex: 1,
    },
    containerB2: {
      flex: 5,
      //alignContent:"center",
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
   
  });
  return (
    <View style={styles.containerB}>
      <View style={styles.containerB1}>
        <View style={styles.navBar}>
          <BtnComponent text="Home" />
          <BtnComponent text="Work" />
          <BtnComponent text="About" />
          <BtnComponent text="Contact" />
        </View>
      </View>
      <View style={styles.containerB2}>
        <Picture/>
      </View>
    </View>
  );
}
