import { get, store } from '../../async-storage';
import { IQuestion } from '../../screens/Entry/types';

const updateSuccessfullAttemts = async (quizType: string) => {
  try {
    const currentPassedAttemts = await get(quizType);

    await store(quizType, `${currentPassedAttemts || 1}`);
  } catch (e) {
    throw new Error(`Update passed tests number error: ${e}`);
  }
};

const calculateTestSuccess = (finalScore: number, questionList: IQuestion[]) => {
  const successFactor = 20 / 18;
  return finalScore > questionList.length / successFactor;
};

export { updateSuccessfullAttemts, calculateTestSuccess };
