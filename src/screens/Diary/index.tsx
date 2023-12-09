import React, { useCallback } from 'react';
import { Layout, Calendar, TopNavigation, Text, NativeDateService } from '@ui-kitten/components';

import styles from './styles';
import type { TNavigationProps } from './types';
import { useTranslation } from 'react-i18next';
import { TextProps } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import calendarTranslation from '../../locales/calendar';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('diary_screen.screen_title')}</Text>
};

const Diary: React.FC<TNavigationProps> = () => {
  const { language } = useSelector((state: RootState) => state.settings);
  
  const i18n = calendarTranslation[language];
  const localeDateService = new NativeDateService(language, { i18n, startDayOfWeek: 1 });
  
  const TitleMemoized = useCallback(() => <Title />, []);

  return (
    <>
      <TopNavigation
        title={TitleMemoized}
        alignment="center"
      />
      <Layout style={styles.container}>
        <Calendar dateService={localeDateService}/>
      </Layout>
    </>
  );
};

export default Diary;
