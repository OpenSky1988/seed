import React from 'react';
import { Text } from '@ui-kitten/components';
import { format, parse } from 'date-fns';
import { enUS, es, ru } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

import { capitalizeFirstLetter } from '../../utils';

interface DateDisplayProps {
  date?: string;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date: propDate }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const localeMap: { [key: string]: Locale } = {
    'en-US': enUS,
    ru,
    es,
  };

  const date = propDate ? parse(propDate, 'yyyy-MM-dd', new Date()) : new Date();
  
  const formattedDay = format(date, "d", { locale: localeMap[language] || enUS });
  const formattedMonth = capitalizeFirstLetter(format(date, "MMM", { locale: localeMap[language] || enUS }));
  const formattedYear = format(date, "yyyy", { locale: localeMap[language] || enUS });
  const formattedWeekday = capitalizeFirstLetter(format(date, "EEE", { locale: localeMap[language] || enUS }));

  const formattedDate = `${formattedDay} ${formattedMonth} ${formattedYear}, ${formattedWeekday}`;

  return <Text category='h6'>{formattedDate}</Text>;
};

export default DateDisplay;