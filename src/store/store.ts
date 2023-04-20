import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { dialogueReducer } from './dialogueReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dialogue: dialogueReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;