import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

export interface IQuizPlaceholder {
  quizType: keyof typeof DEVICE_STORE_KEYS;
}
