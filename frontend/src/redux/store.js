import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './features/citiesSlice';




export const store = configureStore({
    reducer: {
        cities: cityReducer,
    }
});

export default store;
