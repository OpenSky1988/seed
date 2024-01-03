import { TLanguage, TMealCategories, TThemeMode } from '../types';
import { COLORS, SIZES } from './theme';

const LANGUAGES: TLanguage[] = ['es', 'en', 'ru'];
const THEME_MODES: TThemeMode[] = ['system', 'light', 'dark'];
const MEAL_CATEGORIES: TMealCategories[] = ['breakfast', 'lunch', 'dinner', 'snack'];
const CATEGORY_EMOJI = {
  breakfast: '🍳',
  lunch: '🥪',
  dinner: '🍽️',
  snack: '🍌',
};

export { CATEGORY_EMOJI, COLORS, LANGUAGES, MEAL_CATEGORIES, SIZES, THEME_MODES };
