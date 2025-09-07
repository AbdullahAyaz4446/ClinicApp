import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React from 'react';

type OnboardingProps = {
  title1: string;
  title2: string;
  image: ImageSourcePropType;
  isActive?: boolean;
  onPress: () => void;
  style?: ViewStyle;
};

const OnBordingComponent: React.FC<OnboardingProps> = ({
  title1,
  title2,
  image,
  isActive,
  onPress,
}) => {
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title1}</Text>
        <Text style={styles.headerText}>{title2}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.imageConatiner}>
          <Image source={image} style={styles.image} />
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <Text
              onPress={() => {
                onPress();
              }}
              style={styles.headerText}
            >
              Next
            </Text>
          </View>
          <View style={styles.onBordingContainer}>
            <View
              style={
                isActive ? [styles.circle, styles.activeCircle] : styles.circle
              }
            ></View>
            <View
              style={
                !isActive ? [styles.circle, styles.activeCircle] : styles.circle
              }
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBordingComponent;

const styles = StyleSheet.create({
  mainConatiner: {
    backgroundColor: '#EEEFF2',
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottom: {
    backgroundColor: '#FFFFFF',
    flex: 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  imageConatiner: {
    marginBottom: 30,
    backgroundColor: '#DFF7E2',
    borderRadius: 1000,
  },
  image: {
    height: 265,
    width: 299,
  },
  onBordingContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    borderColor: 'black',
    borderWidth: 2,
  },
  activeCircle: {
    backgroundColor: '#007AFF',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0,
  },
  buttonContainer: {
    marginBottom: 30,
  },
});
