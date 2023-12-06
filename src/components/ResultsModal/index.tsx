import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, Text, useTheme } from '@ui-kitten/components';

import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { RootState } from '../../store';
import styles from './styles';
import { IResultsModalProps } from './types';
import { calculateTestSuccess, updateSuccessfullAttemts } from './utils';

const ResultsModal: React.FC<IResultsModalProps> = ({ handleFinish, handleRestart, quizType }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { questionList, score, showScoreModal } = useSelector(
    (state: RootState) => state.questions,
  );

  const isSuccessfull = calculateTestSuccess(score, questionList);

  useEffect(() => {
    (async () => {
      if (quizType && quizType !== DEVICE_STORE_KEYS.MISTAKES && isSuccessfull) {
        await updateSuccessfullAttemts(quizType);
      }
    })();
  }, [isSuccessfull, score, quizType]);

  return (
    <Modal animationType="slide" transparent={true} visible={showScoreModal}>
      <Layout style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultTitle}>
            {isSuccessfull ? t('result_modal.success') : t('result_modal.failure')}
          </Text>
          <View style={styles.resultRatio}>
            <Text
              style={[
                styles.resultCorrect,
                { color: isSuccessfull ? theme['color-success-500'] : theme['color-danger-500'] },
              ]}
            >
              {score}
            </Text>
            <Text style={styles.resultTotal}>/ {questionList.length}</Text>
          </View>

          <TouchableOpacity
            onPress={handleRestart}
            style={[styles.modalButton, { backgroundColor: theme['color-primary-500'] }]}
          >
            <Text style={styles.modalButtonText}>{t('result_modal.retry')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFinish}
            style={[styles.modalButton, { backgroundColor: theme['color-primary-500'] }]}
          >
            <Text style={styles.modalButtonText}>{t('result_modal.menu')}</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </Modal>
  );
};

export default ResultsModal;
