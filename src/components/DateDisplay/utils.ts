import { format, parse } from 'date-fns';
import { enUS, es, ru } from 'date-fns/locale';

import { capitalizeFirstLetter } from '../../utils';

const localeMap: { [key: string]: Locale } = {
  'en-US': enUS,
  ru,
  es,
};

const formatDisplayDate = (propDate: string | undefined, language: string): string => {
  const date = propDate ? parse(propDate, 'yyyy-MM-dd', new Date()) : new Date();
  
  const formattedDay = format(date, "d", { locale: localeMap[language] || enUS });
  const formattedMonth = capitalizeFirstLetter(format(date, "MMM", { locale: localeMap[language] || enUS }));
  const formattedYear = format(date, "yyyy", { locale: localeMap[language] || enUS });
  const formattedWeekday = capitalizeFirstLetter(format(date, "EEE", { locale: localeMap[language] || enUS }));

  return `${formattedDay} ${formattedMonth} ${formattedYear}, ${formattedWeekday}`;
};

export { formatDisplayDate };
