import Clipboard from '@react-native-clipboard/clipboard';
import { Button, CalendarRange, NativeDateService, RangeCalendar, withStyles } from '@ui-kitten/components';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import type { IExportBottomSheet } from './types';
import BottomSheet from '../BottomSheet';
import calendarTranslation from '../../locales/calendar';
import { RootState } from '../../store';
import { IDiary, IDiaryEntry } from '../../screens/DiaryDay/types';
import { formatDisplayDate } from '../DateDisplay/utils';

const categoryEmoji = {
  breakfast: '🍳',
  lunch: '🥪',
  dinner: '🍽️',
  snack: '🍌',
};

const ExportBottomSheet: React.FC<IExportBottomSheet> = ({
  eva,
  innerRef,
  ...props
}) => {
  const { i18n, t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.settings);
  const diary = useSelector((state: RootState) => state.diary);
  
  const [range, setRange] = useState<CalendarRange<Date>>({});
  
  const i18nConfig = calendarTranslation[language];
  const localeDateService = new NativeDateService(language, { i18n: i18nConfig, startDayOfWeek: 1 });

  const formatMeal = (diary: IDiary, date: string) => {
    if (!diary[date as string]) {
      return `🚫 ${t('diary_screen.no_record')}`;
    }

    return diary[date as string].reduce((list: string, meal: IDiaryEntry) => {
      return (`${list}
${categoryEmoji[meal.category]} ${t(`diary_meal.category.${meal.category}`)} - ${meal.time}
*** ${meal.name} ***
🔥 ${t('entry.form.hunger')}: ${meal.hunger}
🎉 ${t('entry.form.fulfillment')}: ${meal.fulfillment}
📝 ${t('entry.form.notes')}: ${meal.notes}
`);
    }, '');
  };

  const prepareDates = (diary: IDiary, startDateStr: string, endDateStr: string) => {
    let fullList = '';
    let currentDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    if (startDateStr === endDateStr) {
      return `🗓️ ${formatDisplayDate(startDateStr, i18n.language)}
--------------------------
${formatMeal(diary, startDateStr as string)}
--------------------------`;
    }

    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split('T')[0];

      fullList = `${fullList}
🗓️ ${formatDisplayDate(dateStr, i18n.language)}
--------------------------
${formatMeal(diary, dateStr as string)}
--------------------------

`;

      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return fullList;
  };

  const handleSelect = (nextRange: CalendarRange<Date>) => setRange(nextRange);

  const handleExport = () => {
    const startDate = (range.startDate as Date).toISOString().split('T')[0];
    const endDate = (range.endDate as Date).toISOString().split('T')[0];

    Clipboard.setString(prepareDates(diary, startDate, endDate));
    props.onClose();
  };

  const handleExportToday = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    Clipboard.setString(prepareDates(diary, formattedDate, formattedDate));
    props.onClose();
  };

  return (
    <BottomSheet innerRef={innerRef} {...props}>
      <RangeCalendar
        dateService={localeDateService}
        onSelect={handleSelect}
        range={range}
        style={eva?.style?.calendar}
      />
      <TouchableOpacity
        onPress={handleExport}
        style={eva?.style?.exportButtonContainer}
      >
        <Button onPress={handleExportToday} style={eva?.style?.exportButton}>
          {t('diary_screen.export_today_button')}
        </Button>
        <Button disabled={!range.endDate} onPress={handleExport} style={eva?.style?.exportButton}>
          {t('diary_screen.export_button')}
        </Button>
      </TouchableOpacity>
    </BottomSheet>
  );
};

const ThemedExportBottomSheet = withStyles(ExportBottomSheet, styles);

export default ThemedExportBottomSheet;