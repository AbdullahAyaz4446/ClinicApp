import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type DashboardBoxesProps = {
  prescriptionsValue?: number;
  prescriptionsBgColor?: string;
  appointmentsValue?: number;
  appointmentsBgColor?: string;
  appointmentsIconColor?: string;
  labTestsValue?: number;
  labTestsBgColor?: string;
  labTestsIconColor?: string;
  onAppointmentsPress?: () => void;
  onLabTestsPress?: () => void;
};

const DashboardBoxes: React.FC<DashboardBoxesProps> = ({
  prescriptionsValue = 0,
  prescriptionsBgColor = '#FFFFFF',
  appointmentsValue = 0,
  appointmentsBgColor = '#FFFFFF',
  appointmentsIconColor = 'black',
  labTestsValue = 0,
  labTestsBgColor = '#FFFFFF',
  labTestsIconColor = 'black',
  onAppointmentsPress,
  onLabTestsPress,
}) => {
  const [activeBox, setActiveBox] = useState<string | null>(null);

  const handlePress = (
    boxType: 'appointments' | 'labTests',
    customOnPress?: () => void
  ) => {
    setActiveBox(activeBox === boxType ? null : boxType);
    if (customOnPress) {
      customOnPress();
    }
  };

  const getBoxColor = (boxType: string, defaultColor: string) => {
    return activeBox === boxType ? '#1E90FF' : defaultColor;
  };

  const getTextColor = (boxType: string, defaultColor: string = 'black') => {
    return activeBox === boxType ? 'white' : defaultColor;
  };

  return (
    <View style={styles.container}>
      {/* Prescriptions Card */}
      <View
        style={[styles.singleBox, { backgroundColor: prescriptionsBgColor }]}
      >
        <Text style={styles.title}>Prescriptions</Text>
        <Text style={styles.value}>{prescriptionsValue}</Text>
      </View>

      {/* Row with Appointments & Lab Tests */}
      <View style={styles.row}>
        {/* Appointments */}
        <TouchableOpacity
          style={[
            styles.box,
            {
              backgroundColor: getBoxColor('appointments', appointmentsBgColor),
            },
          ]}
          onPress={() => handlePress('appointments', onAppointmentsPress)}
          activeOpacity={0.7}
        >
          <Icon
            name='event'
            size={28}
            color={getTextColor('appointments', appointmentsIconColor)}
          />
          <Text style={[styles.title, { color: getTextColor('appointments') }]}>
            Appointments
          </Text>
          <Text style={[styles.value, { color: getTextColor('appointments') }]}>
            {appointmentsValue}
          </Text>
        </TouchableOpacity>

        {/* Lab Tests */}
        <TouchableOpacity
          style={[
            styles.box,
            { backgroundColor: getBoxColor('labTests', labTestsBgColor) },
          ]}
          onPress={() => handlePress('labTests', onLabTestsPress)}
          activeOpacity={0.7}
        >
          <Icon
            name='science'
            size={28}
            color={getTextColor('labTests', labTestsIconColor)}
          />
          <Text style={[styles.title, { color: getTextColor('labTests') }]}>
            Lab Tests
          </Text>
          <Text style={[styles.value, { color: getTextColor('labTests') }]}>
            {labTestsValue}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  singleBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  box: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default DashboardBoxes;
