import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ThemedComponentProps } from '@ui-kitten/components';

import { TRootStackParamList } from '../../types';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Diary'> & ThemedComponentProps<{}>;

export type { TNavigationProps };
