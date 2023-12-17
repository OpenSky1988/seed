import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, ImageBackground } from 'react-native';
import { Text, useTheme } from '@ui-kitten/components';

import styles from './styles';
import TMealButton from './types';

const MealButton: React.FC<TMealButton> = ({ diaryEntry, navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { category, imageUri, name, notes, time } = diaryEntry;

  const [hours, minutes] = time.split(':');

  const navigate = () => navigation.navigate('Entry', { entry: diaryEntry });

  return (
    <TouchableOpacity onPress={navigate}>
      <ImageBackground
        source={{ uri: imageUri || null }}
        style={[styles.mealButton, { backgroundColor: theme['color-primary-500'] }]}
      >
        <View style={styles.mealButtonTitleContainer}>
          <Text style={[ styles.mealButtonCategory, styles.buttonText ]}>{t(`diary_meal.category.${category}`)}</Text>
          <Text style={[ styles.mealButtonTime, styles.buttonText ]}>{`${hours}:${minutes}`}</Text>
        </View>
        <Text style={[ styles.mealButtonName, styles.buttonText ]}>• {name}</Text>
        {!!notes &&
          <View style={styles.mealButtonNotesContainer}>
            <Text style={styles.mealButtonNotes}>{notes}</Text>
          </View>
        }
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MealButton;
