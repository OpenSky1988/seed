import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiary, IDiaryEntry } from '../../screens/DiaryDay/types';

const initialState = {} as IDiary;

const diary = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    deleteMeal(state, action: PayloadAction<IDiaryEntry>) {
      const date = action.payload.created_at.split('T')[0];
      const idToRemove = action.payload.id;

      const newDate = [ ...state[date] ].filter((meal) => meal.id !== idToRemove);

      // Delete from the original date, not the edited one

      return ({
        ...state,
        [date]: newDate,
      });
    },
    editMeal(state, action: PayloadAction<{
      meal: IDiaryEntry;
      originalMeal?: IDiaryEntry;
    }>) {
      const date = action.payload.meal.created_at.split('T')[0];
      const originalDate = action.payload.originalMeal?.created_at.split('T')[0];

      if (originalDate && originalDate !== date) {
        const mealIndexToRemove = state[originalDate]
          .findIndex((meal) => meal.id === action.payload.meal.id);
        
        if (mealIndexToRemove !== -1) {
          state[originalDate].splice(mealIndexToRemove, 1);

          if (state[originalDate].length === 0) {
            delete state[originalDate];
          }
        }
      }

      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(action.payload.meal);

      return state;
    },
    setDiary(_state, action: PayloadAction<IDiary>) {
      return action.payload;
    },
  },
});

export const { deleteMeal, editMeal, setDiary } = diary.actions;
export default diary.reducer;
