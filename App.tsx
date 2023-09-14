import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerA from './components/ContainerA';
import ContainerB from './components/ContainerB';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import WorkScreen from './screens/WorkScreen';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      height: 750,
      backgroundColor: '#292930',
      flexDirection: 'row',
    },
  });
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={styles.container}>
        <ContainerA />
        <ContainerB />
      </View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="WorkScreen" component={WorkScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
