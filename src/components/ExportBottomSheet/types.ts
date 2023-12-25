import type { BottomSheetProps } from '@gorhom/bottom-sheet';
import type { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import type { ThemedComponentProps } from '@ui-kitten/components';
import type { RefObject } from 'react';

type IExportBottomSheet = BottomSheetProps & ThemedComponentProps<{}> & {
  innerRef: RefObject<BottomSheetModalMethods>;
};

export type { IExportBottomSheet };
