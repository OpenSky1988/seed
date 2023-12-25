import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { withStyles } from '@ui-kitten/components';
import React, { useCallback, useMemo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import type { IExportBottomSheet } from './types';

const ExportBottomSheet: React.FC<IExportBottomSheet> = ({ eva, innerRef, ...props }) => {
  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1}/>
  ), []);

  const snapPoints = useMemo(() => ['90%'], []);

  return (
    <BottomSheetModal
      {...props}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleIndicatorStyle={eva?.style?.handleIndicator}
      handleStyle={eva?.style?.handle}
      index={0}
      ref={innerRef}
      snapPoints={snapPoints}
      style={eva?.style?.bottomSheet}
    >
      <View style={eva?.style?.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheetModal>
  );
};

const ThemedExportBottomSheet = withStyles(ExportBottomSheet, styles);

export default ThemedExportBottomSheet;