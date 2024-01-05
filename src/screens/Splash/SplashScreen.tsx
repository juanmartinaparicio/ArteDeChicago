import { Text, Button } from 'react-native';
import React from 'react';

const SplashScreen : React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <>
      <Text>SplashScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
        />
    </>
  );
};

export default SplashScreen;
