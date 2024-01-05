import { Button, Icon, IconProps, Layout, TopNavigation } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import DateDisplay from '../../components/DateDisplay';
import MealButton from '../../components/MealButton';
import { RootState } from '../../store';
import styles from './styles';
import type { TNavigationProps } from './types';
import { sortByTime, formatDate } from './utils';

const CalendarIcon = (props: IconProps) => <Icon {...props} name='plus' />;

const DiaryDay: React.FC<TNavigationProps> = (navigationProps) => {
  const { navigation, route } = navigationProps;
  
  const diary = useSelector((state: RootState) => state.diary);
  
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    setDate((route.params?.day) || formatDate(new Date()));
  }, [route.params?.day]);


  const handleNewMeal = () => navigation.navigate('Entry', {});

  return (
    <>
      <TopNavigation
        title={<DateDisplay date={date} />}
        alignment="center"
      />
      <Layout style={styles.layoutContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {[ ...(diary[date] || []) ].sort(sortByTime).map((diaryEntry) => (
            <MealButton
              {...navigationProps}
              diaryEntry={diaryEntry}
              imageUri={diaryEntry.imageUri}
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
