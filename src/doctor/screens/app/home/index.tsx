import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../../../../components/custom-text-input';
import Button from '../../../../components/button';
import CustomText from '../../../../components/custom-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import DashboardBoxes from '../../../../components/dash-board-boxes/index';

const Home = () => {
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerStyle}>
          <TouchableOpacity style={styles.iconStyle}></TouchableOpacity>
          <Text style={styles.headertextStyle}>Home</Text>

          <View
            style={[
              styles.iconStyle,
              {
                width: 40,
                alignItems: 'center',
                backgroundColor: '#DFF7E2',
                borderRadius: 100,
                height: 40,
                justifyContent: 'center',
              },
            ]}
          >
            <Icon name='bell' size={20} color='black' />
          </View>
        </View>
        <DashboardBoxes />
        <View style={styles.bottomStyle}>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
    flex: 2,
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
});
