import React from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import styles from './styles';

interface IThemedSafeAreaView {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ThemedSafeAreaView: React.FC<IThemedSafeAreaView> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme['background-basic-color-1'] }, style]}
    >
      {children}
    </SafeAreaView>
  );
};

export default ThemedSafeAreaView;
