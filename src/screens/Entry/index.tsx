import React, { useCallback, useState } from 'react';
import { Button, Input, Layout, IndexPath, Select, SelectItem, TopNavigation, Text, withStyles } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { ScrollView, TextProps } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSelector } from 'react-redux';

import styles from './styles';
import { TNavigationProps } from './types';
import { IDiaryEntry } from '../DiaryDay/types';
import ButtonSwitch from '../../components/ButtonSwitch';
import PhotoCapture from '../../components/PhotoCapture';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { MEAL_CATEGORIES } from '../../constants';
import { RootState } from '../../store';
import { useBackAction } from '../../utils/hooks';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('entry.screen_title')}</Text>
};

const Entry: React.FC<TNavigationProps> = ({ eva, route }) => {
  const { t } = useTranslation();
  
  const diaryEntry: IDiaryEntry = route.params;
  const sensationLevels = [1, 2, 3, 4, 5];
  const mealCategories = [
    t('diary_meal.category.breakfast'),
    t('diary_meal.category.lunch'),
    t('diary_meal.category.dinner'),
    t('diary_meal.category.snack'),
  ];

  const [category, setCategory] = useState<IndexPath>(new IndexPath(MEAL_CATEGORIES.indexOf(diaryEntry.category)));
  const [dateTime, setDateTime] = useState<Date>(new Date(diaryEntry.created_at));
  const [fulfillmentIndex, setFulfillmentIndex] = useState<number>(diaryEntry.fulfillment - 1);
  const [hungerIndex, setHungerIndex] = useState<number>(diaryEntry.hunger - 1);
  const [imageUri, setImageUri] = useState<string | undefined>(diaryEntry.imageUri);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>(diaryEntry.name);
  const [notes, setNotes] = useState<string>(diaryEntry.notes);

  const { language } = useSelector((state: RootState) => state.settings);
  const BackAction = useBackAction();

  const TitleMemoized = useCallback(() => <Title />, []);
  const displayDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;

  const handleConfirmDateTime = (date: Date) => {
    setDateTime(date);
    setIsDateTimePickerVisible(false);
  };

  const handlePhotoTaken = (uri: string) => setImageUri(uri);
  const handleSelectCategory = (index: IndexPath | IndexPath[]) => setCategory(index as IndexPath);
  const showDateTimePicker = () => setIsDateTimePickerVisible(true);
  const hideDateTimePicker = () => setIsDateTimePickerVisible(false);

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        accessoryLeft={BackAction}
        alignment="center"
        title={TitleMemoized}
      />
      <ScrollView style={eva.style.container}>
        <Layout style={eva.style.layout}>
          <PhotoCapture onPhotoTaken={handlePhotoTaken} />
          <Input
            label={t('entry.form.name')}
            onChangeText={setName}
            placeholder={t('entry.form.name_placeholder')}
            style={eva.style.input}
            value={name}
          />

          <Select
            label={t('entry.form.category')}
            onSelect={handleSelectCategory}
            selectedIndex={category}
            style={eva.style.input}
            value={mealCategories[category.row]}
          >
            {mealCategories.map((mealCategory) => (
              <SelectItem key={mealCategory} title={mealCategory} />
            ))}
          </Select>

          <ButtonSwitch
            label={t('entry.form.fulfillment')}
            levels={sensationLevels}
            selectedIndex={fulfillmentIndex}
            setSelectedIndex={setFulfillmentIndex}
          />
          <ButtonSwitch
            label={t('entry.form.hunger')}
            levels={sensationLevels}
            selectedIndex={hungerIndex}
            setSelectedIndex={setHungerIndex}
          />

          <Button
            onPress={showDateTimePicker}
            style={[eva.style.input, eva.style.button]}
          >
            {displayDateTime}
          </Button>
          <DateTimePickerModal
            date={dateTime}
            isVisible={isDateTimePickerVisible}
            locale={language}
            mode="datetime"
            onCancel={hideDateTimePicker}
            onConfirm={handleConfirmDateTime}
          />

          <Input
            label={t('entry.form.notes')}
            multiline={true}
            onChangeText={setNotes}
            placeholder={t('entry.form.notes_placeholder')}
            style={eva.style.input}
            textStyle={{ minHeight: 64 }}
            value={notes}
          />

          <Button
            onPress={() => console.log('Submit logic here')}
            style={[eva.style.input, eva.style.button]}
          >
            {t('entry.form.submit_button')}
          </Button>
        </Layout>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

const ThemedEntry = withStyles(Entry, styles);

export default ThemedEntry;
