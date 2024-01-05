import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from './src/theme/colors';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StackNavigator/>
      </SafeAreaView>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.colorE,
    flex: 1,
  },
});


export default App;
