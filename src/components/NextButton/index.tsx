import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, useTheme } from '@ui-kitten/components';

import { RootState } from '../../store';
import styles from './styles';
import type { INextButtonProps } from './types';

const NextButton: React.FC<INextButtonProps> = ({ handleNext }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { showNextButton } = useSelector((state: RootState) => state.questions);

  return showNextButton ? (
    <TouchableOpacity
      onPress={handleNext}
      style={[styles.nextButton, { backgroundColor: theme['color-primary-500'] }]}
    >
      <Text style={styles.nextButtonText}>{t('quiz_screen.next')}</Text>
    </TouchableOpacity>
  ) : null;
};

export default NextButton;
