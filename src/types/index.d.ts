import { IDiaryEntry } from '../screens/DiaryDay/types';

type SvgProps = typeof Svg;

type TRootStackParamList = {
  Diary: undefined;
  DiaryDay: {
    day?: string;
  };
  Entry: {
    entry?: IDiaryEntry;
    date?: string;
  };
  Today: {
    day?: string;
  };
  Settings: undefined;
};

type TLanguage = 'es' | 'en' | 'ru';

type TThemeMode = 'system' | 'light' | 'dark';

type TMealCategories = 'breakfast' | 'lunch' | 'dinner' | 'snack';
