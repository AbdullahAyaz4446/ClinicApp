import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ButtonPorps = {
  buttonStyle?: ViewStyle;
  textColor?: string;
  onPress: () => void;
  title: string;
};

const Button: React.FC<ButtonPorps> = ({
  buttonStyle,
  onPress,
  title,
  textColor,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, buttonStyle]}>
          <Text
            style={[styles.text, { color: textColor ? textColor : 'white' }]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1F75FE',
    width: 200,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
