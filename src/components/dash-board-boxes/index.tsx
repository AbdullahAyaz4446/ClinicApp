import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type DashboardBoxesProps = {
  prescriptionsValue?: number;
  prescriptionsBgColor?: string;
  prescriptionsIconColor?: string;
  appointmentsValue?: number;
  appointmentsBgColor?: string;
  appointmentsIconColor?: string;
  labTestsValue?: number;
  labTestsBgColor?: string;
  labTestsIconColor?: string;
  onAppointmentsPress?: () => void;
  onLabTestsPress?: () => void;
  name?: string;
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

  return (
    <View>
      <View
        style={[styles.singleBox, { backgroundColor: prescriptionsBgColor }]}
      >
        <Text style={styles.title}>Prescriptions</Text>
        <Text style={styles.value}>{prescriptionsValue}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handlePress('appointments', onAppointmentsPress)}
          style={styles.boxTouchable}
        >
          <View
            style={[
              styles.box,
              {
                backgroundColor: getBoxColor(
                  'appointments',
                  appointmentsBgColor
                ),
              },
            ]}
          >
            <Icon
              name='event'
              size={24}
              color={
                activeBox === 'appointments' ? 'white' : appointmentsIconColor
              }
            />
            <Text
              style={[
                styles.title,
                {
                  color: activeBox === 'appointments' ? 'white' : 'black',
                },
              ]}
            >
              Appointments
            </Text>
            <Text
              style={[
                styles.value,
                {
                  color: activeBox === 'appointments' ? 'white' : 'black',
                },
              ]}
            >
              {appointmentsValue}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress('labTests', onLabTestsPress)}
          style={styles.boxTouchable}
        >
          <View
            style={[
              styles.box,
              {
                backgroundColor: getBoxColor('labTests', labTestsBgColor),
              },
            ]}
          >
            <Icon
              name='science'
              size={24}
              color={activeBox === 'labTests' ? 'white' : labTestsIconColor}
            />
            <Text
              style={[
                styles.title,
                {
                  color: activeBox === 'labTests' ? 'white' : 'black',
                },
              ]}
            >
              Lab Tests
            </Text>
            <Text
              style={[
                styles.value,
                {
                  color: activeBox === 'labTests' ? 'white' : 'black',
                },
              ]}
            >
              {labTestsValue}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleBox: {
    margin: 5,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  boxTouchable: {
    flex: 1,
  },
  box: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default DashboardBoxes;
