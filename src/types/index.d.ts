import { IDiaryEntry } from '../screens/DiaryDay/types';

type SvgProps = typeof Svg;

type TRootStackParamList = {
  DiaryDay: {
    day?: string;
  };
  Today: {
    day?: string;
  };
  Entry: {
    diaryEntry?: IDiaryEntry;
  };
  Diary: undefined;
  Settings: undefined;
  Entry: undefined;
};

type TLanguage = 'es' | 'en' | 'ru';

type TThemeMode = 'system' | 'light' | 'dark';

type TMealCategories = 'breakfast' | 'lunch' | 'dinner' | 'snack';
