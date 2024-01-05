import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../../async-storage';
import { TLanguage, TThemeMode } from '../../types';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

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
      store(DEVICE_STORE_KEYS.LANGUAGE, action.payload);
    },
    setThemeMode(state, action: PayloadAction<TThemeMode>) {
      state.themeMode = action.payload;
      store(DEVICE_STORE_KEYS.THEME, action.payload);
    },
  },
});

export const { setLanguage, setThemeMode } = settings.actions;
export default settings.reducer;
