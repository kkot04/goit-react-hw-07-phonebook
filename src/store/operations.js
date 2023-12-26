import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = 'https://658a2bbeba789a962236c5c2.mockapi.io/contacts'

export const fetchContactsThunk = createAsyncThunk(
    'futchContacts', 
    async (_, thunkAPI) => {
        try{
            const {data} = await axios.get('contacts')
            return data
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

 export const removeContactsThunk = createAsyncThunk(
    'deleteContacts',
    async (id, thunkAPI) => {
        try {
            const {data} = await axios.delete(`contacts/${id}`)
            return data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)

        }
    }
 )

 export const addContactThunk = createAsyncThunk(
    'addContacts', 
    async ({name, number}, thunkAPI) => {
        try {
            const {data} = await axios.post('contacts', {name, number})
            return data
        }
        catch (error){
            return thunkAPI.rejectWithValue(error.message)

        }
    }
 )