import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import OnBordingComponent from '../../../../components/bording-screen';

const OnBordingScreen2 = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    // Try both methods for debugging
    try {
      navigation.replace('Launch');
    } catch (error) {
      console.error('Replace failed, trying navigate:', error);
    }
  };

  return (
    <View style={styles.container}>
      <OnBordingComponent
        title1='Schedule Your Medical'
        title2='Appointments'
        image={require('../../../assets/doctor-on-bording2.png')}
        isActive={false}
        onPress={handleNextPress}
      />
    </View>
  );
};

export default OnBordingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
