import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Text, useTheme } from '@ui-kitten/components';

import { COLORS } from '../../constants';
import {
  decreaseWrongAnswersInDeviceStorage,
  increaseWrongAnswersInDeviceStorage,
} from '../../screens/Entry/utils';
import { RootState } from '../../store';
import { updateAnswer } from '../../store/slices/diary';
import styles from './styles';
import { IOptionButtonProps } from './types';

const OptionButton: React.FC<IOptionButtonProps> = ({ handleNext, option, optionIndex }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const {
    correctOptionNumber,
    currentOptionSelected,
    currentQuestionIndex,
    isOptionsDisabled,
    questionList,
  } = useSelector((state: RootState) => state.questions);

  const isCorrect = optionIndex === correctOptionNumber;
  const isSelected = option === currentOptionSelected;

  const backgroundColor = isCorrect
    ? theme['color-success-500']
    : isSelected
    ? theme['color-danger-500']
    : theme['color-basic-transparent-300'];
  const isTextWhite = isCorrect || isSelected;

  const validateAnswer = async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { correctOptionNumber, id } = questionList[currentQuestionIndex];

    dispatch(updateAnswer({ correctOptionNumber, selectedOption: option }));

    if (optionIndex === correctOptionNumber) {
      await decreaseWrongAnswersInDeviceStorage(id);
      setTimeout(handleNext, 200);
    } else {
      await increaseWrongAnswersInDeviceStorage(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={validateAnswer}
      disabled={isOptionsDisabled}
      key={option}
      style={[styles.questionOption, { backgroundColor }]}
    >
      <Text style={[styles.questionOptionText, ...(isTextWhite ? [{ color: COLORS.white }] : [])]}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionButton;
