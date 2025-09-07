import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login_Registration_Option from '../../../../components/login-Registration-option-component';

const LunchScreen = () => {
  const signUp = () => {
    console.log('sign up');
  };
  const logIn = () => {
    console.log('log in');
  };
  return (
    <View style={styles.mainContainer}>
      <Login_Registration_Option onPressLogin={logIn} onPressSignUp={signUp} />
    </View>
  );
};

export default LunchScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});
