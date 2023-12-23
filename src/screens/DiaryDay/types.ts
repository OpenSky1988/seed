import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TMealCategories, TRootStackParamList } from '../../types';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Today' | 'DiaryDay'>;

interface IDiaryEntry {
  id: string;
  category: TMealCategories;
  created_at: string;
  fulfillment: number;
  hunger: number;
  imageUri?: string;
  name: string;
  notes: string;
  time: string;
}

interface IDiary {
  [key: string]: IDiaryEntry[];
}

export type { TNavigationProps, IDiary, IDiaryEntry };
