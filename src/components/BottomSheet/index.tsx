import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet';
import { withStyles } from '@ui-kitten/components';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import styles from './styles';
import type { IBottomSheet } from './types';

const BottomSheet: React.FC<IBottomSheet> = ({ children, eva, innerRef, ...props }) => {
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
        {children as ReactNode}
      </View>
    </BottomSheetModal>
  );
};

const ThemedBottomSheet = withStyles(BottomSheet, styles);

export default ThemedBottomSheet;