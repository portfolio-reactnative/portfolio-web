import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Work Screen</Text>
      <Text style={styles.description}>
        This is the Work screen. Add your work or portfolio information here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize the background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    margin: 20,
    textAlign: 'center',
  },
});

export default WorkScreen;
