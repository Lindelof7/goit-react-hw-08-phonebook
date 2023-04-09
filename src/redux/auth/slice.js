import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logOut, refreshUser } from './operations'
import Notiflix from 'notiflix';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false
    }, 
    extraReducers: builder => {
        builder.addCase(register.pending, (state, action) => state)
            .addCase(register.fulfilled, (state, action) => { 
                state.user = action.payload.user;
                state.token = action.payload.token; 
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => { 
                 Notiflix.Notify.failure('Please, make sure that you are giving valid data')
            })
            .addCase(logIn.pending, (state, action) => { })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token; 
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state, action) => { 
                Notiflix.Notify.failure('Wrong email or password')
            })  
            .addCase(logOut.pending, (state, action) => { })  
            .addCase(logOut.fulfilled, (state, action) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            }) 
            .addCase(logOut.rejected, (state, action) => { }) 
            .addCase(refreshUser.pending, (state, action) => { 
                state.isRefreshing = true;
            }) 
            .addCase(refreshUser.fulfilled, (state, action) => { 
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }) 
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
             }) 
        
        
    }
})

export const authReducer = authSlice.reducer;