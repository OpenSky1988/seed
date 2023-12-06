import {
  IndexPath,
  Layout,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LANGUAGES, THEME_MODES } from '../../constants';
import { RootState } from '../../store';
import { setLanguage, setThemeMode } from '../../store/slices/settings';
import styles from './styles';
import { TextProps } from 'react-native';

const Title: React.FC<TextProps> = () => {
  const { t } = useTranslation();

  return <Text category='h6'>{t('settings.screen_title')}</Text>
};

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language, themeMode } = useSelector((state: RootState) => state.settings);

  const handleLanguageChange = (index: IndexPath | IndexPath[]) => {
    const selectedLanguage = LANGUAGES[(index as IndexPath).row];
    dispatch(setLanguage(selectedLanguage));
  };

  const handleThemeModeChange = (index: number) => {
    const selectedThemeMode = THEME_MODES[index];
    dispatch(setThemeMode(selectedThemeMode));
  };

  const TitleMemoized = useCallback(() => <Title />, []);

  return (
    <>
      <TopNavigation
        title={TitleMemoized}
        alignment="center"
      />
      <Layout style={styles.container}>
        <Text style={styles.text} category="h6">
          {t('settings.language.title')}
        </Text>
        <Select
          style={styles.setting}
          selectedIndex={new IndexPath(LANGUAGES.indexOf(language))}
          onSelect={handleLanguageChange}
          value={t(`settings.language.options.${language}`)}
        >
          <SelectItem title={t('settings.language.options.es')} />
          <SelectItem title={t('settings.language.options.en')} />
          <SelectItem title={t('settings.language.options.ru')} />
        </Select>
        <Text style={styles.text} category="h6">
          {t('settings.themeMode.title')}
        </Text>
        <RadioGroup
          style={styles.setting}
          selectedIndex={THEME_MODES.indexOf(themeMode)}
          onChange={handleThemeModeChange}
        >
          <Radio>{t('settings.themeMode.options.system')}</Radio>
          <Radio>{t('settings.themeMode.options.light')}</Radio>
          <Radio>{t('settings.themeMode.options.dark')}</Radio>
        </RadioGroup>
      </Layout>
    </>
  );
};

export default Settings;
