import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './slices/gamesSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;