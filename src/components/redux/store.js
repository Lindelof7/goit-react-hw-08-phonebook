import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import contactFilter from './contactFilter'


export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: contactFilter,
    }
})
