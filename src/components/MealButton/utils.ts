import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import i18n from '../../locales/i18n';

const { t } = i18n;

const getSubtitle = async (subtitle: string, quizType: string) => {
  switch (quizType) {
    case DEVICE_STORE_KEYS.ORDERED:
    case DEVICE_STORE_KEYS.RANDOMIZED: {
      const passedAttemts = await get(quizType);

      return t('menu.successful_attemps', { attemptsNumber: passedAttemts || 0 });
    }
    default: {
      return subtitle;
    }
  }
};

export { getSubtitle };
