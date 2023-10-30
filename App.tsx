import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BtnComponent from './components/BtnComponents';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorkScreen from './screens/WorkScreen';
import ContactScreen from './screens/ContactScreen';

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
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

const App = () => {
  const [tab, setTab] = useState('HomeScreen');

  return (
    <View>
      <View style={styles.navBar}>
        <BtnComponent text="Home" onPress={() => setTab('HomeScreen')} />
        <BtnComponent text="Work" onPress={() => setTab('WorkScreen')} />
        <BtnComponent text="About" onPress={() => setTab('AboutScreen')} />
        <BtnComponent text="Contact" onPress={() => setTab('ContactScreen')} />

        {/* <Button title="Home" onPress={() => setTab("HomeScreen")}></Button>
        <Button title="About" onPress={() => setTab("AboutScreen")}></Button>
        <Button title="Contact" onPress={() => setTab("ContactScreen")}></Button>
        <Button title="Work" onPress={() => setTab("WorkScreen")}></Button> */}
      </View>
      <View>
        {tab == 'HomeScreen' ? (
          <HomeScreen></HomeScreen>
        ) : tab == 'AboutScreen' ? (
          <AboutScreen></AboutScreen>
        ) : tab == 'ContactScreen' ? (
          <ContactScreen></ContactScreen>
        ) : (
          <WorkScreen></WorkScreen>
        )}
      </View>
    </View>
  );
};

export default App;
