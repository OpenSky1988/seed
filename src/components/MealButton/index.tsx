import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, ImageBackground, StyleProp, ViewStyle } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

import styles from './styles';
import type { TMealButton } from './types';

const MealButton: React.FC<TMealButton> = ({ diaryEntry, imageUri, navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { category, name, notes, time } = diaryEntry;

  const [hours, minutes] = time.split(':');

  const navigate = () => navigation.navigate('Entry', { entry: diaryEntry });

  const overlayStyles: StyleProp<ViewStyle> = [
    styles.overlay,
    { borderRadius: styles.mealButton.borderRadius },
  ];

  if (imageUri) {
    overlayStyles.push(styles.overlayShadow);
  }

  return (
    <TouchableOpacity onPress={navigate}>
      <ImageBackground
        imageStyle={{ borderRadius: styles.mealButton.borderRadius }}
        source={{ uri: imageUri || undefined }}
        style={[styles.mealButton, { backgroundColor: theme['color-primary-700'] }]}
      >
        <View style={overlayStyles}>
          <View style={styles.mealButtonTitleContainer}>
            <Text
              numberOfLines={1}
              style={[ styles.mealButtonCategory, styles.buttonText ]}>
              {t(`diary_meal.category.${category}`)}
            </Text>
            <Text
              numberOfLines={1}
              style={[ styles.mealButtonTime, styles.buttonText ]}>
              {`${hours}:${minutes}`}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={[ styles.mealButtonName, styles.buttonText ]}>
            • {name}
          </Text>
          {!!notes &&
            <View style={styles.mealButtonNotesContainer}>
              <Text
                numberOfLines={1}
                style={styles.mealButtonNotes}>{notes}</Text>
            </View>
          }
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MealButton;
