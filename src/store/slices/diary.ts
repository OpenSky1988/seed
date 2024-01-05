import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiary, IDiaryEntry } from '../../screens/DiaryDay/types';
import { store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

const initialState = {} as IDiary;

const diary = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    deleteMeal(state, action: PayloadAction<IDiaryEntry>) {
      const date = action.payload.created_at.split('T')[0];
      const idToRemove = action.payload.id;

      const newDate = [ ...state[date] ].filter((meal) => meal.id !== idToRemove);

      const newDiary = {
        ...state,
        [date]: newDate,
      };

      store(DEVICE_STORE_KEYS.DIARY, newDiary);
      return newDiary;
    },

    editMeal(state, action: PayloadAction<{
      meal: IDiaryEntry;
      originalMeal?: IDiaryEntry;
    }>) {
      const date = action.payload.meal.created_at.split('T')[0];
      const originalDate = action.payload.originalMeal?.created_at.split('T')[0] ?? date;
      const mealIndexToRemove = state[originalDate]
        ?.findIndex((meal) => meal.id === action.payload.meal.id);
      
      if (mealIndexToRemove !== undefined && mealIndexToRemove !== -1) {
        state[originalDate].splice(mealIndexToRemove, 1);
        if (state[originalDate].length === 0) {
          delete state[originalDate];
        }
      }

      if (!state[date]) {
        state[date] = [];
      }

      state[date].push(action.payload.meal);

      store(DEVICE_STORE_KEYS.DIARY, state);
      return state;
    },

    setDiary(_state, action: PayloadAction<IDiary>) {
      return action.payload;
    },
  },
});

export const { deleteMeal, editMeal, setDiary } = diary.actions;
export default diary.reducer;
