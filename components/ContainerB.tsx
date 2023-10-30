import React from 'react';
import {StyleSheet, View} from 'react-native';
//import BtnComponent from './BtnComponents';
import Picture from './Picture';

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
    justifyContent: 'flex-end',
  },
});
export default function containerB() {
  return (
    <View style={styles.containerB}>
      <View style={styles.containerB1}></View>
      <View style={styles.containerB2}>
        <Picture />
      </View>
    </View>
  );
}
