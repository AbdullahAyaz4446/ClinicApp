import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../button';

type OptionPoprs = {
  onPressLogin: () => void;
  onPressSignUp: () => void;
};

const Login_Registration_Option: React.FC<OptionPoprs> = ({
  onPressLogin,
  onPressSignUp,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={require('../../doctor/assets/logo.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Emrakon is a medical app designed to simplify and expedite access to
          care
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressLogin} title='Login' />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPressSignUp}
          title='Sign Up'
          buttonStyle={{ backgroundColor: '#F6F6F6' }}
          textColor='black'
        />
      </View>
    </View>
  );
};

export default Login_Registration_Option;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
