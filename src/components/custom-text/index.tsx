import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

type CustomTextProps = {
  children: string;
  style?: TextStyle;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  onPress?: () => void;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontSize,
  fontWeight,
  color,
  textAlign,
  onPress,
  ...props
}) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles.defaultText,
        {
          fontSize,
          fontWeight,
          color,
          textAlign,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#000000',
  },
});
