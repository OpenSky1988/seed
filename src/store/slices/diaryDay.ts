import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiaryEntry } from '../../screens/DiaryDay/types';

type DiaryDateState = {
  entry: IDiaryEntry[];
};

const initialState = {} as DiaryDateState;

const diaryDay = createSlice({
  name: 'diaryDay',
  initialState,
  reducers: {
    setDay(state, action: PayloadAction<IDiaryEntry[]>) {
      state.entry = action.payload;
    },
  },
});

export const { setDay } = diaryDay.actions;
export default diaryDay.reducer;
