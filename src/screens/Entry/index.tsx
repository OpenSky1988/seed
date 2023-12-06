import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Modal, TextProps, View } from 'react-native';
import { Button, Input, Layout, IndexPath, Select, SelectItem, TopNavigation, Text } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';

import { TNavigationProps } from './types';
import { IDiaryEntry } from '../DiaryDay/types';
import ThemedSafeAreaView from '../../components/ThemedSafeAreaView';
import { useBackAction } from '../../utils/hooks';
import { MEAL_CATEGORIES } from '../../constants';
import { ButtonSwitch } from '../../components/ButtonSwitch';
import PhotoCapture from '../../components/PhotoCapture';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('entry_screen.screen_title')}</Text>
};

const Entry: React.FC<TNavigationProps> = ({ route }) => {
  const diaryEntry: IDiaryEntry = route.params;

  const [imageUri, setImageUri] = useState<string>(diaryEntry.imageUri);
  const [category, setCategory] = useState<IndexPath>(new IndexPath(MEAL_CATEGORIES.indexOf(diaryEntry.category)));
  const [date, setDate] = useState<Date>(new Date(diaryEntry.created_at));
  const [time, setTime] = useState<Date>(new Date(`2021-01-01T${diaryEntry.time}:00`));
  const [fulfillmentIndex, setFulfillmentIndex] = useState<number>(diaryEntry.fulfillment - 1);
  const [hungerIndex, setHungerIndex] = useState<number>(diaryEntry.hunger - 1);
  const [name, setName] = useState<string>(diaryEntry.name);
  const [notes, setNotes] = useState<string>(diaryEntry.notes);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState<boolean>(false);

  const { t } = useTranslation();
  const BackAction = useBackAction();

  const displayDateTime = `${date.toLocaleDateString()} ${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  const renderLevelButtonSwitch = (selectedIndex: number, setSelectedIndex: (index: number) => void) => (
    <ButtonSwitch
      onSelect={setSelectedIndex}
      selectedIndex={selectedIndex}
      fullWidth
    >
      {[1, 2, 3, 4, 5].map((level, index) => (
        <Button key={index}>{level.toString()}</Button>
      ))}
    </ButtonSwitch>
  );

  const handlePhotoTaken = (uri: string) => {
    setImageUri(uri);
  };

  return (
    <ThemedSafeAreaView>
      <TopNavigation
        title={t('entry.screen_title')}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <ScrollView style={styles.container}>
        <Layout style={styles.layout}>
          <PhotoCapture onPhotoTaken={handlePhotoTaken} />
          <Input
            label={t('entry.form.name')}
            placeholder={t('entry.form.name_placeholder')}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Select
            label={t('entry.form.category')}
            selectedIndex={category}
            onSelect={index => setCategory(index as IndexPath)}
            value={[
              t('diary_meal.category.breakfast'),
              t('diary_meal.category.lunch'),
              t('diary_meal.category.dinner'),
              t('diary_meal.category.snack'),
            ][category.row]}
            style={styles.input}
          >
            <SelectItem title={t('diary_meal.category.breakfast')} />
            <SelectItem title={t('diary_meal.category.lunch')} />
            <SelectItem title={t('diary_meal.category.dinner')} />
            <SelectItem title={t('diary_meal.category.snack')} />
          </Select>

          <Button onPress={() => setDateTimePickerVisible(true)} style={styles.input}>
            {displayDateTime}
          </Button>

          <Modal
            visible={isDateTimePickerVisible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modalView}>
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate ?? date;
                  setDate(currentDate);
                }}
              />
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => {
                  const currentTime = selectedTime ?? time;
                  setTime(currentTime);
                }}
              />
              <Button onPress={() => setDateTimePickerVisible(false)}>Done</Button>
            </View>
          </Modal>

          <Text category='s1' style={styles.levelLabel}>{t('entry.form.fulfillment')}</Text>
          {renderLevelButtonSwitch(fulfillmentIndex, setFulfillmentIndex)}

          <Text category='s1' style={styles.levelLabel}>{t('entry.form.hunger')}</Text>
          {renderLevelButtonSwitch(hungerIndex, setHungerIndex)}

          <Input
            label={t('entry.form.notes')}
            placeholder={t('entry.form.notes_placeholder')}
            value={notes}
            onChangeText={setNotes}
            multiline={true}
            textStyle={{ minHeight: 64 }}
            style={styles.input}
          />

          <Button
            onPress={() => console.log('Submit logic here')}
            style={styles.input}
          >
            {t('entry.form.submit_button')}
          </Button>
        </Layout>
      </ScrollView>
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginVertical: 8,
  },
  levelGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  levelLabel: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default Entry;
