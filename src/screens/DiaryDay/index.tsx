import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Icon, IconProps, Layout, TopNavigation } from '@ui-kitten/components';

import DateDisplay from '../../components/DateDisplay';
import MealButton from '../../components/MealButton';
import data from '../../data/diary';
import styles from './styles';
import type { TNavigationProps } from './types';
import { formatDate } from './utils';

const CalendarIcon = (props: IconProps) => <Icon {...props} name='plus' />;

const DiaryDay: React.FC<TNavigationProps> = (navigationProps) => {
  const day = navigationProps.route.params?.day ?? '2023-11-28T00:00:00';
  const date = day ? new Date(day) : new Date();
  const formattedToday = formatDate(date);

  return (
    <>
      <TopNavigation
        title={<DateDisplay />}
        alignment="center"
      />
      <Layout style={styles.container}>
        <ScrollView>
          {data[formattedToday]?.map((diaryEntry) => (
            <MealButton
              {...navigationProps}
              diaryEntry={diaryEntry}
              key={`${diaryEntry.name}-${diaryEntry.time}`}
            />
          ))}
          <View style={styles.addMealButtonContainer}>
            <Button
              style={styles.addMealButton}
              accessoryLeft={CalendarIcon}
            />
          </View>
        </ScrollView>
      </Layout>
    </>
  );
};

export default DiaryDay;
