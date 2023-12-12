import { Button, Icon, IconProps, Layout, TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import DateDisplay from '../../components/DateDisplay';
import MealButton from '../../components/MealButton';
import { RootState } from '../../store';
import styles from './styles';
import type { TNavigationProps } from './types';
import { formatDate } from './utils';

const CalendarIcon = (props: IconProps) => <Icon {...props} name='plus' />;

const DiaryDay: React.FC<TNavigationProps> = (navigationProps) => {
  const { navigation, route } = navigationProps;
  const day = route.params?.day ?? '2023-11-28T00:00:00';
  // const day = route.params?.day;
  const date = day ? new Date(day) : new Date();
  const formattedToday = formatDate(date);

  const { dates: diary } = useSelector((state: RootState) => state.diary);

  const handleNewMeal = () => navigation.navigate('Entry', {});

  return (
    <>
      <TopNavigation
        title={<DateDisplay />}
        alignment="center"
      />
      <Layout style={styles.layoutContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {diary[formattedToday]?.map((diaryEntry) => (
            <MealButton
              {...navigationProps}
              diaryEntry={diaryEntry}
              key={`${diaryEntry.name}-${diaryEntry.time}`}
            />
          ))}
          <TouchableOpacity
            onPress={handleNewMeal}
            style={styles.addMealButtonContainer}
          >
            <Button
              accessoryLeft={CalendarIcon}
              onPress={handleNewMeal}
              style={styles.addMealButton}
            />
          </TouchableOpacity>
        </ScrollView>
      </Layout>
    </>
  );
};

export default DiaryDay;
