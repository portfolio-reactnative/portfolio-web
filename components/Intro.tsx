import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function intro() {
  const styles = StyleSheet.create({
    textStyle1: {
      fontSize: 40,
      color: 'white',
    },
    textStyle2: {
      fontSize: 40,
      color: 'gold',
    },
  });

  return (
    <View>
      <Text style={styles.textStyle1}>Hello,</Text>
      <Text style={styles.textStyle2}>It's me</Text>
    </View>
  );
}
