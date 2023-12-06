import React from 'react';
import { Animated, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';
import type { IProgressBarProps } from './types';

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  const { questionList } = useSelector((state: RootState) => state.questions);

  const progressAnimation = progress.interpolate({
    inputRange: [0, questionList.length],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, { width: progressAnimation }]} />
    </View>
  );
};

export default ProgressBar;
