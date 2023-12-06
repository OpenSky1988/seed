import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const PhotoCapture = ({ onPhotoTaken }) => {
  const [imageUri, setImageUri] = useState(null);

  const handleTakePhoto = () => {
    const options = {
      cameraType: 'back',
      saveToPhotos: true,
      mediaType: 'photo',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image capture');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.uri };
        setImageUri(source.uri);
        if (onPhotoTaken) {
          onPhotoTaken(source.uri);
        }
      }
    });
  };

  return (
    <View>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.preview}
        />
      )}
      <Button title="Take Photo" onPress={handleTakePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: 300,
    height: 300,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoCapture;
