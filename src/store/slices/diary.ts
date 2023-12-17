import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiaryDay, IDiaryEntry } from '../../screens/DiaryDay/types';

const initialState = {} as IDiaryDay;

const diary = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    deleteMeal(state, action: PayloadAction<IDiaryEntry>) {
      const date = action.payload.created_at.split('T')[0];
      const time = action.payload.time;

      const newDate = { ...state[date] };

      // If they edit date before deleting - ??
      // If they edit time before deleting - ??

      delete newDate[time];

      return (state = {
        ...state,
        [date]: newDate,
      });
    },
    editMeal(state, action: PayloadAction<IDiaryEntry>) {
      const date = action.payload.created_at.split('T')[0];

      const time = action.payload.time;

      // delete from the previous date if the date changes
      // delete the previous time if the time changes

      return (state = {
        ...state,
        [date]: {
          ...state[date],
          [time]: action.payload,
        },
      });
    },
    setDiary(_state, action: PayloadAction<IDiaryDay>) {
      return action.payload;
    },
  },
});

export const { deleteMeal, editMeal, setDiary } = diary.actions;
export default diary.reducer;
