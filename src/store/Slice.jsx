import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, removeContactsThunk, fetchContactsThunk } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
}


export const Slice = createSlice({
  name: 'phonebook',
  initialState,

  extraReducers: builder => {
    builder
    .addCase(fetchContactsThunk.fulfilled, (state, {payload}) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    })
    .addCase(removeContactsThunk.fulfilled, (state, {payload}) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== payload.id
      )
      state.contacts.isLoading = false
    })
    .addCase(addContactThunk.fulfilled, (state, {payload}) => {
      state.contacts.items.push(payload);
      state.contacts.isLoading = false
    })
    .addCase(fetchContactsThunk.pending, state => {
      state.contacts.isLoading = true;
    })
  .addCase(fetchContactsThunk.rejected, (state, {payload})=> {
    state.contacts.isLoading = false
    state.error = payload
  })
  }
})

export const { deleteContact, setFilter, addContact, fetchingData, isError, isLoading } = Slice.actions;

export default Slice.reducer;