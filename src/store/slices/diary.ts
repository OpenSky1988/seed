import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiaryDay, IDiaryEntry } from '../../screens/DiaryDay/types';

const initialState = {
  dates: {} as IDiaryDay,
};

const diary = createSlice({
  name: 'diary',
  initialState,
  reducers: {
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
    editMeal(state, action: PayloadAction<string>) {
      // Get date
      // Pick the day in diary
      // Look for the meal in the day
      // Update it
    },
    setDiary(state, action: PayloadAction<IDiaryDay>) {
      state.dates = action.payload;
    },
  },
});

export const { addMeal, deleteMeal, editMeal, setDiary } = diary.actions;
export default diary.reducer;
