import { useActionSheet } from '@expo/react-native-action-sheet';
import { Icon, IconProps, withStyles } from '@ui-kitten/components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, ImageBackground, TouchableOpacity } from 'react-native';

import type { IPhotoCapture } from './types';
import { handleSelectPhoto, handleTakePhoto } from './utils';
import { cameraIconStyles, styles } from './styles';

const CameraIcon: React.FC<IconProps> = ({ eva, hasImage, ...restProps }) => (
  hasImage || <Icon
    {...restProps}
    style={eva?.style?.cameraIcon}
    fill={eva?.style?.cameraIcon.fill}
    name="camera-outline"
  />
);

const ThemedCameraIcon = withStyles(CameraIcon, cameraIconStyles);

const PhotoCapture: React.FC<IPhotoCapture> = ({ eva, onPhotoTaken }) => {
  const [imageUri, setImageUri] = useState<string | undefined>();

  const { showActionSheetWithOptions } = useActionSheet();
  const { t } = useTranslation();

  const handleOpenActionSheet = () => {
    const options = [
      t('entry.photo_capture.action_sheet.take_photo'),
      t('entry.photo_capture.action_sheet.pick_from_gallery'),
      t('entry.photo_capture.action_sheet.cancel'),
    ];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    }, (selectedIndex?: number) => {
      switch (selectedIndex) {
        case 0:
          handleTakePhoto(setImageUri, onPhotoTaken);
          break;

        case 1:
          handleSelectPhoto(setImageUri, onPhotoTaken);
          break;
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenActionSheet} style={{ width: '100%' }}>
        <ImageBackground
          imageStyle={{ borderRadius: eva?.style?.preview.borderRadius }}
          source={{ uri: imageUri }}
          style={eva?.style?.preview}
        >
          <ThemedCameraIcon hasImage={!!imageUri} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const ThemedPhotoCapture = withStyles(PhotoCapture, styles);

export default ThemedPhotoCapture;
