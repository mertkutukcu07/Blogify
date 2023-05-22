// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BlogHomeScreen from '../screens/BlogHomeScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BlogHome" component={BlogHomeScreen} options={{
            headerShown:false
        }} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{
            headerShown:false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
