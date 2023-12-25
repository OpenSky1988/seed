import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { get } from './async-storage';
import { LANGUAGES } from './constants';
import { RootState } from './store';
import { setLanguage, setThemeMode } from './store/slices/settings';
import type { TLanguage } from './types';

const useLocale = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const OSlanguage = RNLanguageDetector.detect() as string;
  const defaultLanguage = LANGUAGES.includes(OSlanguage as TLanguage) ? OSlanguage : 'en';

  const { language } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    (async () => {
      const DSlanguage = await get('language');
      dispatch(setLanguage(DSlanguage || defaultLanguage));
    })();
  }, [dispatch, defaultLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
};

const useThemeMode = () => {
  const colorScheme = useColorScheme() || 'light';
  const dispatch = useDispatch();

  const { themeMode } = useSelector((state: RootState) => state.settings);
  const activeTheme = themeMode === 'system' ? colorScheme : themeMode;

  useEffect(() => {
    (async () => {
      const DSthemeMode = await get('themeMode');

      dispatch(setThemeMode(DSthemeMode || colorScheme));
      StatusBar.setBarStyle(`${activeTheme === 'dark' ? 'light' : 'dark'}-content`);
    })();
  }, [colorScheme, dispatch, activeTheme]);

  return colorScheme;
};

export { useLocale, useThemeMode };
