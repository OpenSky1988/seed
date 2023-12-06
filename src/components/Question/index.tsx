import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { increaseWrongAnswersInDeviceStorage } from '../../screens/Entry/utils';
import { RootState } from '../../store';
import { useCountdown } from './hooks';

import styles from './styles';
import { IQuestionProps } from './types';

const Question: React.FC<IQuestionProps> = ({ handleNext, quizType }) => {
  const { t } = useTranslation();
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);

  const isMarathon = quizType === DEVICE_STORE_KEYS.MARATHON;
  const [countdown, setCountdown] = useCountdown(isMarathon);

  const currentQuestionId = questionList[currentQuestionIndex]?.id;

  useEffect(() => {
    setCountdown(20);
  }, [currentQuestionId, setCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      (async () => {
        await increaseWrongAnswersInDeviceStorage(currentQuestionId);
        handleNext();
        setCountdown(20);
      })();
    }
  }, [countdown, currentQuestionId, currentQuestionIndex, handleNext, questionList, setCountdown]);

  return (
    <View style={styles.questionContainer}>
      <View style={styles.questionCounter}>
        <Text style={styles.questionCurrentIndex}>
          {t('quiz_screen.question', { questionId: questionList[currentQuestionIndex]?.id })}
        </Text>
        {isMarathon && (
          <View style={styles.countdownContainer}>
            <Text style={styles.countdown}>{countdown}</Text>
          </View>
        )}
        <Text style={styles.questionTotal}>
          {`${currentQuestionIndex + 1} / ${questionList.length}`}
        </Text>
      </View>
      <Text style={styles.questionText}>{questionList[currentQuestionIndex]?.question}</Text>
    </View>
  );
};

export default Question;
