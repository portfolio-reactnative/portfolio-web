import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function containerA() {
  const styles = StyleSheet.create({
    containerA: {
      backgroundColor: 'red',
      flex: 1,
      flexDirection: 'column',
    },

    containerA1: {
      backgroundColor: 'brown',
      flex: 1,
    },
    containerA2: {
      backgroundColor: 'green',
      flex: 1,
    },
    containerA3: {
      backgroundColor: 'black',
      flex: 1,
    },
    containerA4: {
      backgroundColor: 'green',
      flex: 1,
    },
    containerA5: {
      backgroundColor: 'red',
      flex: 1,
    },
    containerA6: {
      backgroundColor: 'cyan',
      flex: 1,
    },
    containerA7: {
      backgroundColor: 'black',
      flex: 1,
    },
  });
  return (
    <View style={styles.containerA}>
      <View style={styles.containerA1} />
      <View style={styles.containerA2} />
      <View style={styles.containerA3} />
      <View style={styles.containerA4} />
      <View style={styles.containerA5} />
      <View style={styles.containerA6} />
      <View style={styles.containerA7} />
    </View>
  );
}
