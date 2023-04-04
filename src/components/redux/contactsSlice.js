import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, deleteContact, addContactToStore } from './api';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    reducers: {
        // addContactToStore: (state, action) => {
        //     state.items.push(action.payload)
        // },
        filterContacts: (state, action) => {
            return state.items.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload))
        }
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchContacts.error](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.fulfilled](state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
            state.items.splice(index, 1);
        },
        [addContactToStore.fulfilled](state, action) {
            state.items.push(action.payload)
        }
    }
})

export const { filterContacts } = contactsSlice.actions

export default contactsSlice.reducer
