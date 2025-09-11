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
import CustomDropdown from '../../../../components/drop-down/index';

const Appoinments = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const navigation = useNavigation();
  const countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerStyle}>
          <View style={styles.iconStyle} />
          <Text style={styles.headertextStyle}>Appointment</Text>
          <View style={styles.iconStyle} />
        </View>
        <View style={styles.bottomStyle}>
          <View>
            <CustomDropdown
              label='Country'
              data={countries}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder='Select country'
              borderRadius={8}
              backgroundColor='#FFFFFF'
            />
            <CustomTextInput
              label='Time'
              placeholder='Select Time'
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <CustomTextInput
              label='Date'
              placeholder='Select Date'
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <CustomTextInput
              label='Description'
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              multilines={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Appoinments;

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
    marginBottom: 70,
  },
  iconStyle: {
    width: 40,
    alignItems: 'flex-start',
  },
  bottomStyle: {
    flex: 1,
    paddingVertical: 20,
    paddingBottom: 60,
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
