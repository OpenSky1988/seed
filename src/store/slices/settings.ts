import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../../async-storage';
import { TLanguage, TThemeMode } from '../../types';

interface ISettings {
  language: TLanguage;
  themeMode: TThemeMode;
}

const initialState = {
  language: 'en',
  themeMode: 'system',
} as ISettings;

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<TLanguage>) {
      state.language = action.payload;
      store('language', action.payload);
    },
    setThemeMode(state, action: PayloadAction<TThemeMode>) {
      state.themeMode = action.payload;
      store('themeMode', action.payload);
    },
  },
});

export const { setLanguage, setThemeMode } = settings.actions;
export default settings.reducer;
