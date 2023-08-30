import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function containerB() {
  const styles = StyleSheet.create({
    containerB: {
      backgroundColor: 'green',
      flex: 1,
      flexDirection: 'column',
    },
    containerB1: {
      backgroundColor: 'yellow',
      flex: 1,
    },
    containerB2: {
      backgroundColor: 'purple',
      flex: 5,
    },
  });
  return (
    <View style={styles.containerB}>
      <View style={styles.containerB1} />
      <View style={styles.containerB2} />
    </View>
  );
}
