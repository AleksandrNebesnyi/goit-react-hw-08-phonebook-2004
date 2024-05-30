import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsReducer } from './contacts/contacts-slice';
import { filterReducer } from './contacts/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;

