import { Text } from '@ui-kitten/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, View } from 'react-native';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import styles from './styles';
import { IQuizPlaceholder } from './types';

const translationPrefixes = {
  [DEVICE_STORE_KEYS.MISTAKES]: 'mistakes_empty_quiz',
  [DEVICE_STORE_KEYS.FAVORITES]: 'favorites_empty_quiz',
};

const QuizPlaceholder: React.FC<IQuizPlaceholder> = ({ quizType }) => {
  const { t } = useTranslation('translation', { keyPrefix: translationPrefixes[quizType] });
  const { height } = Dimensions.get('window');

  return (
    <View style={[styles.container, { paddingTop: height * 0.3 }]}>
      <Text category="h3" style={styles.text}>
        {t('title')}
      </Text>
      <Text category="s1" style={styles.text}>
        {t('subtitle')}
      </Text>
    </View>
  );
};

export default QuizPlaceholder;
