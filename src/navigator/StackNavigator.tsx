import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Detail from '../screens/Detail';

export type RootStackParamList={
  Splash:undefined,
  Home:undefined,
  Detail: {item:undefined} ,
}
const StackNavigator : React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator  initialRouteName="Splash" >
      <Stack.Screen
        name="Splash" //nombre para reconocer a este componente stack
        component={Splash} //componente que renderiza este componente stack
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }} //headerShown: false -> oculta la barra superior stack
      />
      <Stack.Screen
        name="Home" //nombre para reconocer a este componente stack
        component={Home} //componente que renderiza este componente stack
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Detail" //nombre para reconocer a este componente stack
        component={Detail} //componente que renderiza este componente stack
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
