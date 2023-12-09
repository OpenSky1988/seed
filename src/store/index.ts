import { configureStore } from '@reduxjs/toolkit';
import diary from './slices/diary';
import diaryDay from './slices/diaryDay';
import settings from './slices/settings';

export const store = configureStore({
  reducer: {
    diary,
    diaryDay,
    settings,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
