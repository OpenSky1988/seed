import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiaryDay, IDiaryEntry } from '../../screens/DiaryDay/types';

type DiaryState = {
  [date: string]: IDiaryDay;
};

const initialState = {} as DiaryState;

const diary = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    setDiary(state, action: PayloadAction<DiaryState>) {
      // Set the whole thing into the memory
    },
    editMeal(state, action: PayloadAction<IDiaryEntry>) {
      // Get date
      // Pick the day in diary
      // Look for the meal in the day
      // Update it
    },
    addMeal(state, action: PayloadAction<IDiaryEntry>) {
      // Get date
      // Pick the day in diary
      // Push the meal there
    },
    deleteMeal(state, action: PayloadAction<string>) {
      // Get date
      // Pick the day in diary
      // Look for the meal in the day
      // Delete it
    },
  },
});

export const { editMeal, addMeal, deleteMeal } = diary.actions;
export default diary.reducer;
