import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import counterReducer from '../components/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

