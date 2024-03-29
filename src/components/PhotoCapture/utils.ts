import { CameraType, MediaType, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const handleTakePhoto = (
  onPhotoTaken: (uri: string) => void,
) => {
  const options = {
    cameraType: 'back' as CameraType,
    saveToPhotos: true,
    noData: true,
    mediaType: 'photo' as MediaType,
    selectionLimit: 1,
  };

  launchCamera(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image capture');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      const source = { uri: response.assets?.[0].uri ?? null };
      onPhotoTaken(source.uri as string);
    }
  });
};

const handleSelectPhoto = (
  onPhotoSelected: (uri: string) => void,
) => {
  const options = {
    noData: true,
    mediaType: 'photo' as MediaType,
    selectionLimit: 1,
  };

  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      console.log('User cancelled image capture');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      const source = { uri: response.assets?.[0].uri ?? null };
      onPhotoSelected(source.uri as string);
    }
  });
};

export {
  handleSelectPhoto,
  handleTakePhoto,
};
