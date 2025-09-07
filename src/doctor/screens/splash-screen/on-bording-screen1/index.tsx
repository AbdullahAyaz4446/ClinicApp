import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OnBordingComponent from '../../../../components/bording-screen';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Onboarding2: undefined;
};

const OnBordingScreen1 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleNextPress = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <View style={styles.container}>
      <OnBordingComponent
        title1='Check Your'
        title2='Medical History'
        image={require('../../../assets/doctor-on-bording.png')}
        isActive={true}
        onPress={handleNextPress}
      />
    </View>
  );
};

export default OnBordingScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
