import React from 'react';
import { Text } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';

import type { IDateDisplayProps } from './types';
import { formatDisplayDate } from './utils';

const DateDisplay: React.FC<IDateDisplayProps> = ({ date }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const formattedDate = formatDisplayDate(date, language);

  return <Text category='h6'>{formattedDate}</Text>;
};

export default DateDisplay;