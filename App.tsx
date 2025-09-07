import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBordingScreen1 from './src/doctor/screens/splash-screen/on-bording-screen1';
import OnBordingScreen2 from './src/doctor/screens/splash-screen/on-boridng-screen2';
import Login_Registration_Option from './src/components/login-Registration-option-component';
import LunchScreen from './src/doctor/screens/splash-screen/on-bording-screen3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Onboarding1' component={OnBordingScreen1} />
        <Stack.Screen name='Onboarding2' component={OnBordingScreen2} />
        <Stack.Screen name='Launch' component={LunchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
