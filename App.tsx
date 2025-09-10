import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBordingScreen1 from './src/doctor/screens/splash-screen/on-bording-screen1';
import OnBordingScreen2 from './src/doctor/screens/splash-screen/on-boridng-screen2';
import LogIn from './src/doctor/screens/auth/login-form';
import SignUp from './src/doctor/screens/auth/register-form';
import LaunchScreen from './src/doctor/screens/splash-screen/on-bording-screen3';
import Home from './src/doctor/screens/app/home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Onboarding1'
      >
        <Stack.Screen name='Onboarding1' component={OnBordingScreen1} />
        <Stack.Screen name='Onboarding2' component={OnBordingScreen2} />
        <Stack.Screen name='Launch' component={LaunchScreen} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
