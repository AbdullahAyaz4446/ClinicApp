import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  data: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  containerStyle?: object;
  labelStyle?: object;
  dropdownStyle?: object;
  placeholderStyle?: object;
  selectedTextStyle?: object;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  search?: boolean;
};

const CustomDropdown: React.FC<DropdownProps> = ({
  label,
  data,
  value,
  onChange,
  placeholder = 'Select an option',
  containerStyle,
  labelStyle,
  dropdownStyle,
  placeholderStyle,
  selectedTextStyle,
  borderColor = '#DDD',
  borderRadius = 18,
  backgroundColor = '#F6F6F6',
  search = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.label, labelStyle]}>
        <Text>{label}</Text>
      </View>

      <View style={styles.dropdownContainer}>
        <Dropdown
          style={[
            styles.dropdown,
            dropdownStyle,
            {
              borderColor: borderColor,
              borderRadius,
              backgroundColor,
            },
          ]}
          placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
          selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          search={search}
          maxHeight={300}
          labelField='label'
          valueField='value'
          placeholder={placeholder}
          searchPlaceholder='Search...'
          value={value}
          onChange={(item) => {
            onChange(item.value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '100%',
  },
  label: {
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    fontWeight: '600',
    fontSize: 15,
  },
  dropdown: {
    height: 55,
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F6F6F6',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  dropdownContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default CustomDropdown;
