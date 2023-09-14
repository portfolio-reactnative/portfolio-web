import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContainerA from '../components/ContainerA';
import ContainerB from '../components/ContainerB';

const styles = StyleSheet.create({
    container: {
      height: 750,
      backgroundColor: '#292930',
      flexDirection: 'row',
    },
  });
const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <ContainerA />
    <ContainerB />
  </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Home Screen</Text>
    //   <Text style={styles.description}>
    //     This is the About screen. Add your about information here.
    //   </Text>
    // </View>
  );
};



export default HomeScreen;

