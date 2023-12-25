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

const ExportBottomSheet: React.FC<IExportBottomSheet> = ({
  eva,
  innerRef,
  ...props
}) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.settings);

  const i18n = calendarTranslation[language];
  const localeDateService = new NativeDateService(language, { i18n, startDayOfWeek: 1 });

  const [range, setRange] = useState({});

  const handleSelect = (nextRange: CalendarRange<Date>) => setRange(nextRange);

  const handleExport = () => {
    console.log('+++ RANGE +++', JSON.stringify(range, null, '  '));

    Clipboard.setString('hello world');
    // {
    //   "startDate": "2023-12-03T06:00:00.000Z",
    //   "endDate": "2023-12-11T06:00:00.000Z"
    // }
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
        <Button onPress={handleExport} style={eva?.style?.exportButton}>
          {t('diary_screen.export_button')}
        </Button>
      </TouchableOpacity>
    </BottomSheet>
  );
};

const ThemedExportBottomSheet = withStyles(ExportBottomSheet, styles);

export default ThemedExportBottomSheet;