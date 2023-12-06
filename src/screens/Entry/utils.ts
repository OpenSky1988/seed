import { Animated } from 'react-native';

import { get, store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import data from '../../data/diary';
import { shuffleArray } from '../../utils';
import { IQuestion } from './types';

const animateProgress = (progress: Animated.Value, toValue: number) => {
  Animated.timing(progress, {
    toValue,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};

const decreaseWrongAnswersInDeviceStorage = async (currentQuestionIndex: number) => {
  await updateWrongAnswersInDeviceStorage(currentQuestionIndex, (wrongAnswersNumber: number) => {
    return wrongAnswersNumber ? wrongAnswersNumber - 1 : 0;
  });
};

const filterFavorites = async (questions: IQuestion[]): Promise<IQuestion[]> => {
  const favoritesIds = (await get(DEVICE_STORE_KEYS.FAVORITES)) || [];
  const filteredFavorites = questions.filter((question) => favoritesIds.includes(question.id));

  return filteredFavorites;
};

const filterMistakes = async (questions: IQuestion[]): Promise<IQuestion[]> => {
  const wrongAnswers = (await get(DEVICE_STORE_KEYS.WRONG_ANSWERS)) || {};
  const wrongAnswersKeys = Object.keys(wrongAnswers);

  const filteredMistakes = questions.filter(
    (question) => wrongAnswersKeys.includes(`${question.id}`) && wrongAnswers[question.id],
  );

  return filteredMistakes;
};

const getQuizLanguage = (OSlanguage: string): 'es' | 'en' | 'ru' => {
  switch (OSlanguage) {
    case 'es':
      return 'es';
    case 'ru':
      return 'ru';
    case 'en':
    default:
      return 'en';
  }
};

const increaseWrongAnswersInDeviceStorage = async (currentQuestionId: number) => {
  await updateWrongAnswersInDeviceStorage(currentQuestionId, (wrongAnswersNumber: number) => {
    return wrongAnswersNumber ? wrongAnswersNumber + 1 : 1;
  });
};

const questionsPrepper = (quizType: keyof typeof DEVICE_STORE_KEYS) => {
  const questionPreppers = {
    [DEVICE_STORE_KEYS.FAVORITES]: async (questionsData: IQuestion[]) => {
      const filteredFavorites = await filterFavorites(questionsData);
      return shuffleArray(filteredFavorites);
    },
    [DEVICE_STORE_KEYS.MARATHON]: (questionsData: IQuestion[]) => questionsData,
    [DEVICE_STORE_KEYS.MISTAKES]: async (questionsData: IQuestion[]) => {
      const filteredMistakes = await filterMistakes(questionsData);
      return shuffleArray(filteredMistakes);
    },
    [DEVICE_STORE_KEYS.ORDERED]: (questionsData: IQuestion[]) => questionsData,
    [DEVICE_STORE_KEYS.RANDOMIZED]: (questionsData: IQuestion[]) => shuffleArray(questionsData),
  };

  return questionPreppers[quizType];
};

const setupQuiz = async (
  quizType: keyof typeof DEVICE_STORE_KEYS,
  OSlanguage: string,
): Promise<IQuestion[]> => {
  const language = getQuizLanguage(OSlanguage);
  const quizData = data[language];

  const preparedQuestions = await questionsPrepper(quizType)(quizData);

  return preparedQuestions as IQuestion[];
};

const updateWrongAnswersInDeviceStorage = async (
  currentQuestionId: number,
  updateCallback: (wrongAnswersNumber: number) => void,
) => {
  try {
    const wrongAnswers = await get(DEVICE_STORE_KEYS.WRONG_ANSWERS);

    await store(DEVICE_STORE_KEYS.WRONG_ANSWERS, {
      ...wrongAnswers,
      [currentQuestionId]: updateCallback(wrongAnswers?.[currentQuestionId]),
    });
  } catch (e) {
    throw new Error(`Update wrong answer error: ${e}`);
  }
};

export {
  animateProgress,
  decreaseWrongAnswersInDeviceStorage,
  filterFavorites,
  filterMistakes,
  getQuizLanguage,
  increaseWrongAnswersInDeviceStorage,
  questionsPrepper,
  setupQuiz,
};
