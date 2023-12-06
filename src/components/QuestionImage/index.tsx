import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import images from '../../data/images';

import styles from './styles';

const QuestionImage: React.FC = () => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);
  const questionId = questionList[currentQuestionIndex]?.id;
  const questionImage = images[questionId as unknown as keyof typeof images];

  if (questionImage) {
    return <Image style={styles.image} resizeMode="contain" source={questionImage} />;
  }

  return null;
};

export default QuestionImage;
