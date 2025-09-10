import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import React from 'react';

type CustomTextInputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  secureTextEntry?: boolean;
} & TextInputProps;

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  containerStyle,
  inputStyle,
  labelStyle,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <View style={styles.lableStyle}>
        <Text>{label}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInputStyle, inputStyle]}
          secureTextEntry={secureTextEntry}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  lableStyle: {
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    fontWeight: '600',
    fontSize: 15,
  },
  textInputContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textInputStyle: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 18,
  },
});
