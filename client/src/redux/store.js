import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { alertSlice } from './features/alertSlice';
import { userSlice } from './features/userSlice';
import { doctorSlice } from './features/doctorSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const rootReducer = combineReducers({
  alert: alertSlice.reducer,
  user: userSlice.reducer,
  doctor: doctorSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: ['your/action/type']
  })
});

export const persistor = persistStore(store);
