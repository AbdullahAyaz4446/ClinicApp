import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Make sure to install this package
import Home from '../home';
import Appoinments from '../appoinmnets.tsx';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6A5ACD',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 0,
          height: 100,
          paddingBottom: 8,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Appointments'
        component={Appoinments}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='event' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
