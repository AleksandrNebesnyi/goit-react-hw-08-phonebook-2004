import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IContact, IState } from '../../interfaces/contacts-interfaces';
import {
  addContact,
  fetchContacts,
  deleteContact,
} from '../../operation/contactsApi';

const handlePending = (state: IState) => {
  state.isLoading = true;
};

const handleRejected = (state: IState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [] as IContact[],
    isLoading: false,
    error: null,
  } as IState,

  reducers: {}, // Потрібно вказати порожні ред'юсери, оскільки їх нема

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<IContact[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.isLoading = false;
          state.error = null;

          state.items = state.items.filter(
            contact => contact.id !== action.payload.id
          );
        }
      )
      .addCase(deleteContact.rejected, handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
