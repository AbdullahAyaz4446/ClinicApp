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
  iconStyle?: object;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  iconColor?: string;
  error?: string;
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
  iconStyle,
  borderColor = '#DDD',
  borderRadius = 12,
  backgroundColor = '#FFF',
  iconColor = '#666',
  error,
  search = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <Dropdown
        style={[
          styles.dropdown,
          dropdownStyle,
          {
            borderColor: error ? '#FF3B30' : borderColor,
            borderRadius,
            backgroundColor,
          },
        ]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[styles.iconStyle, iconStyle]}
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
        renderLeftIcon={() => (
          <View style={[styles.icon, { backgroundColor: iconColor }]} />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    paddingHorizontal: 4,
  },
  dropdown: {
    height: 55,
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 4,
    paddingHorizontal: 4,
  },
});

export default CustomDropdown;
