import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TMealCategories, TRootStackParamList } from '../../types';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Today'>;

// interface IMenuRouteItem {
//   params?: { [key: string]: unknown };
//   to: keyof TRootStackParamList;
//   title: string;
//   subtitle?: string;
// }

interface IDiaryEntry {
  category: TMealCategories;
  created_at: string;
  fulfillment: number;
  hunger: number;
  imageUri?: string;
  name: string;
  notes: string;
  time: string;
}

interface IDiaryDay {
  [key: string]: {
    [key: string]: IDiaryEntry;
  }
}

export type { TNavigationProps, IDiaryDay, IDiaryEntry };
