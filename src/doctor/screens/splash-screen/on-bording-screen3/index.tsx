import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login_Registration_Option from '../../../../components/login-Registration-option-component';
import { useNavigation } from '@react-navigation/native';
const LaunchScreen = () => {
  const navigation = useNavigation();
  const signUp = () => {
    navigation.navigate('SignUp');
  };
  const logIn = () => {
    navigation.navigate('LogIn');
  };
  return (
    <View style={styles.mainContainer}>
      <Login_Registration_Option onPressLogin={logIn} onPressSignUp={signUp} />
    </View>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
