import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../../components/custom-text-input';
import Button from '../../../../components/button';
import CustomText from '../../../../components/custom-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const LogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    console.log('Sign Up pressed');
  };

  const handleForgotPassword = () => {
    console.log('forget Button is pressed');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => navigation.goBack()}
        >
          <Icon name='arrow-left' size={20} color='black' />
        </TouchableOpacity>
        <Text style={styles.headertextStyle}>Welcome</Text>

        <View style={styles.iconStyle} />
      </View>
      <View style={styles.bottomStyle}>
        <View>
          <CustomTextInput
            label='Username or email'
            placeholder='abdullahayaz131@gmail.com'
            onChangeText={setEmail}
            value={email}
          />
          <CustomTextInput
            label='Password'
            placeholder='**********'
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Log In' onPress={handleLogin} />

          <View style={styles.textConatiner}>
            <CustomText
              children='Forgot Password?'
              fontWeight='normal'
              textAlign='center'
              onPress={handleForgotPassword}
            />
          </View>

          <Button
            title='Sign Up'
            buttonStyle={{ backgroundColor: '#F6F6F6' }}
            textColor='black'
            onPress={handleSignUp}
          />
        </View>
        <View>
          <CustomText children='or sign up with' textAlign='center' />

          <View style={styles.socialButtonsContainer}>
            <View>
              <Icon name='facebook' size={35} color='#1877F2' />
            </View>
            <View>
              <Icon name='google' size={35} color='#DB4437' />
            </View>
          </View>

          <View style={styles.signUpContainer}>
            <CustomText children='Dont have a account?' />
            <CustomText
              children='Sign Up'
              color='blue'
              onPress={handleSignUp}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEEFF2',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  iconStyle: {
    width: 40,
    alignItems: 'flex-start',
  },
  bottomStyle: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    marginTop: 20,
  },
  headertextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
  },
  textConatiner: {
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
});
