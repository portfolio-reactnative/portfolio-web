import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerA from './components/ContainerA';
import ContainerB from './components/ContainerB';
import SocialMedia from './components/socialIcon';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      height: 750,
      backgroundColor: '#292930',
      flexDirection: 'row',
    },
  });
  return (
    <View>
      <View style={styles.container}>
        <ContainerA />
        <ContainerB />
        
      </View>
      <View><SocialMedia /></View>
    </View>
  );
};

export default App;
