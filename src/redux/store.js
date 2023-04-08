import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import contactsSlice from './contactsSlice'
import contactFilter from './contactFilter'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/slice'

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
    })
]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: contactFilter,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware, 
    devTools : process.env.NODE_ENV === 'development'
})



export const persistor = persistStore(store);