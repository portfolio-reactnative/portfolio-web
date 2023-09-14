import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
//import BtnComponent from './BtnComponents';
import Picture from './Picture';
import {useNavigation} from '@react-navigation/native';


//import { WorkScreen, AboutScreen, ContactScreen } from 'screen-names';

export default function containerB() {
  const navigation = useNavigation();
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
  
  return (
    <View style={styles.containerB}>
      
      <View style={styles.containerB1}>
        <View style={styles.navBar}>
        
          {/* <BtnComponent
            text="Work"
            //@ts-ignore
            onPress={() => navigation.navigate("WorkScreen")}
          />
          <BtnComponent
            text="About"
            //@ts-ignore
            onPress={() => navigation.navigate("AboutScreen")}
          />
          <BtnComponent
            text="Contact"
            //@ts-ignore
            onPress={() => navigation.navigate("ContactScreen")}
          /> */}
          
          <Button title='AAA' onPress={() => navigation.navigate("WorkScreen" as never)}></Button>
        </View>
      </View>
      <View style={styles.containerB2}>
        <Picture />
      </View>
    </View>
  );
}
