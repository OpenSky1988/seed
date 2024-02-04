import * as eva from '@eva-design/eva';
import theme from './custom-theme.json';
import { TThemeMode } from '../types';

const darkColorOverrides = {
  'background-basic-color-1': '#012224',
  'background-basic-color-2': '#002E27',
  'background-basic-color-3': '#002926',
  'background-basic-color-4': '#050C42',
  'color-primary-500': '#04754D',
};

const getTheme = (colorScheme: 'light' | 'dark', themeMode: TThemeMode) => {
  const currentTheme = eva[themeMode === 'system' ? colorScheme : themeMode];
  const customTheme = (themeMode === 'system' && colorScheme === 'dark') || themeMode === 'dark'
    ? { ...theme, ...darkColorOverrides }
    : theme;

  return { ...currentTheme, ...customTheme };
};

export default getTheme;