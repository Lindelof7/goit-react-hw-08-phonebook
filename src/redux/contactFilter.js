import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = '';

export const contactFilter = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter: (state, action) => {
            return state = action.payload;
        },
    },
})

export const { setFilter } = contactFilter.actions

export default contactFilter.reducer
