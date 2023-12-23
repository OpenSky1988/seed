import {
  Calendar,
  Layout,
  NativeDateService,
  StyleType,
  TopNavigation,
  Text,
  withStyles,
} from '@ui-kitten/components';
import { CalendarDateInfo } from '@ui-kitten/components/ui/calendar/type';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, TextProps, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import type { TNavigationProps } from './types';
import calendarTranslation from '../../locales/calendar';
import { RootState } from '../../store';
import { formatDate } from '../DiaryDay/utils';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('diary_screen.screen_title')}</Text>
};

const Diary: React.FC<TNavigationProps> = ({ navigation, eva }) => {
  const { language } = useSelector((state: RootState) => state.settings);
  const diary = useSelector((state: RootState) => state.diary);

  const i18n = calendarTranslation[language];
  const localeDateService = new NativeDateService(language, { i18n, startDayOfWeek: 1 });
  
  const TitleMemoized = useCallback(() => <Title />, []);

  const renderDay = (info: CalendarDateInfo<Date>, style: StyleType): React.ReactElement => {
    const { date } = info;
    const dateString = date.toISOString().split('T')[0];
    const isDiaryDate = diary.hasOwnProperty(dateString);

    const containerStyle = (): StyleProp<ViewStyle> => {
      const centeredContainer = { ...style.container, ...eva?.style?.dateContainer };

      return (
        isDiaryDate
          ? [ centeredContainer, eva?.style?.filledDate ]
          : centeredContainer
      );
    };

    return (
      <View style={containerStyle()}>
        <Text style={style.text}>
          {date.getDate().toString()}
        </Text>
      </View>
    );
  };

  const handleSelect = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    const isToday = dateString === formatDate(new Date());

    navigation.navigate(
      isToday ? 'Today' : 'DiaryDay',
      { day: dateString },
    );
  };

  return (
    <>
      <TopNavigation
        title={TitleMemoized}
        alignment="center"
      />
      <Layout style={eva?.style?.container}>
        <Calendar
          dateService={localeDateService}
          onSelect={handleSelect}
          renderDay={renderDay}
        />
      </Layout>
    </>
  );
};

const ThemedEntry = withStyles(Diary, styles);

export default ThemedEntry;
