import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6421855134d6cd4ebd7544bc.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/contacts')
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const addContactToStore = createAsyncThunk('contacts/addContact',
    async (newContact, thunkApi) => {
        try {
            const response = await axios.post(`/contacts`, newContact)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)