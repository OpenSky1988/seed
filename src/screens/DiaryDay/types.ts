import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TMealCategories } from '../../types';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Today'> & {
  onMealChange: () => void;
};

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

interface IDiary {
  [key: string]: IDiaryEntry[];
}

export type { TProps, IDiary, IDiaryEntry };
