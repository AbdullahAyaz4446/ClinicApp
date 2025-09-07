import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OnBordingComponent from '../../../../components/bording-screen';
import { useNavigation } from '@react-navigation/native';

const OnBordingScreen2 = () => {
  const navigation = useNavigation();
  const handleNextPress = () => {
    navigation.navigate('Launch');
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
