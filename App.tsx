import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerA from './components/ContainerA';
import ContainerB from './components/ContainerB';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      height: 750,
      backgroundColor: 'black',
      flexDirection: 'row',
    },
    
    
  });
  return (
    <View style={styles.container}>
      <ContainerA/>
      <ContainerB/>
    </View>
  );
};

export default App;
