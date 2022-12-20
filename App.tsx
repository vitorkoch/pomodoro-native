import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
// Pages
import Timer from './src/pages/Timer';
import Config from './src/pages/Config';

import LinearGradient from 'react-native-linear-gradient';
import colors from './src/styles/colors';
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />

        <Stack.Navigator>
          <Stack.Screen
            name="Timer"
            component={Timer}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Configuration" component={Config} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
