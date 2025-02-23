
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './navigator/Home'
import Welcome from './navigator/Welcome'
import Exercises from './navigator/Exercises';
import ExerciseDetail from './navigator/ExerciseDetail';


const Stack = createStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>      
        <Stack.Screen name="Exercises" component={Exercises} options={{ headerShown: false }}/>
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}



export default App;
