import { configureStore } from '@reduxjs/toolkit';
import questions from './slices/questions';
import settings from './slices/settings';

export const store = configureStore({
  reducer: {
    questions,
    settings,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
