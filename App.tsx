import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import colors from './src/theme/colors';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.colorE,
    flex: 1,
  },
});


export default App;
