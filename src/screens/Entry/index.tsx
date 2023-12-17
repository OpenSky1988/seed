import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Button, Input, Layout, IndexPath, Select, SelectItem, TopNavigation, Text, withStyles } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { ScrollView, TextProps } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { TNavigationProps } from './types';
import ButtonSwitch from '../../components/ButtonSwitch';
import PhotoCapture from '../../components/PhotoCapture';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { RootState } from '../../store';
import { useBackAction } from '../../utils/hooks';
import { getCategoryIndexPath } from './utils';
import { editMeal } from '../../store/slices/diary';
import { formatDate, formatTime } from '../DiaryDay/utils';
import { MEAL_CATEGORIES } from '../../constants';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('entry.screen_title')}</Text>
};

const Entry: React.FC<TNavigationProps> = ({ eva, route }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const sensationLevels = [1, 2, 3, 4, 5];
  const mealCategories = [
    t('diary_meal.category.breakfast'),
    t('diary_meal.category.lunch'),
    t('diary_meal.category.dinner'),
    t('diary_meal.category.snack'),
  ];

  const [category, setCategory] = useState<IndexPath>(getCategoryIndexPath('breakfast'));
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [fulfillment, setFulfillment] = useState<number>(0);
  const [hunger, setHunger] = useState<number>(0);
  const [imageUri, setImageUri] = useState<string | undefined>();
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const diaryEntry = route.params?.entry;

  useFocusEffect(
    useCallback(() => {
      setCategory(getCategoryIndexPath(diaryEntry?.category ?? 'breakfast'));
      setDateTime(diaryEntry?.created_at ? new Date(diaryEntry?.created_at) : new Date());
      setFulfillment(diaryEntry?.fulfillment ?? 1);
      setHunger(diaryEntry?.hunger ?? 1);
      setImageUri(diaryEntry?.imageUri);
      setName(diaryEntry?.name ?? '');
      setNotes(diaryEntry?.notes ?? '');
    }, [diaryEntry]),
  );

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

  const handleSubmit = () => {
    const date = formatDate(dateTime);
    const time = formatTime(dateTime);
    const created_at = `${date}T${time}`;

    dispatch(editMeal({
      category: MEAL_CATEGORIES[category - 1],
      created_at,
      fulfillment,
      hunger,
      imageUri,
      name,
      notes,
      time,
    }));

    navigation.goBack();
  };

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        accessoryLeft={BackAction}
        alignment="center"
        title={TitleMemoized}
      />
      <ScrollView style={eva?.style?.container}>
        <Layout style={eva?.style?.layout}>
          <PhotoCapture onPhotoTaken={handlePhotoTaken} />
          <Input
            label={t('entry.form.name')}
            onChangeText={setName}
            placeholder={t('entry.form.name_placeholder')}
            style={eva?.style?.input}
            value={name}
          />

          <Select
            label={t('entry.form.category')}
            onSelect={handleSelectCategory}
            selectedIndex={category}
            style={eva?.style?.input}
            value={mealCategories[category.row]}
          >
            {mealCategories.map((mealCategory) => (
              <SelectItem key={mealCategory} title={mealCategory} />
            ))}
          </Select>

          <ButtonSwitch
            label={t('entry.form.fulfillment')}
            levels={sensationLevels}
            selectedIndex={fulfillment}
            setSelectedIndex={setFulfillment}
          />
          <ButtonSwitch
            label={t('entry.form.hunger')}
            levels={sensationLevels}
            selectedIndex={hunger}
            setSelectedIndex={setHunger}
          />

          <Button
            onPress={showDateTimePicker}
            style={[eva?.style?.input, eva?.style?.button]}
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
            style={eva?.style?.input}
            textStyle={{ minHeight: 64 }}
            value={notes}
          />

          <Button
            onPress={handleSubmit}
            style={[eva?.style?.input, eva?.style?.button]}
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
