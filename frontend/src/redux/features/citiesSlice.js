import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cityList: [],
    isLoading: false,
    currentCity: {},
    error: "",
};


export const citiesSlice = createSlice({
    initialState,
    name: "cities",
    reducers: {
        addCity(state, action) {
            state.cityList.push(action.payload);
        },
        deleteCity(state, action) {
            state.cityList = state.cityList.filter((item) => item.id !== action.payload)
        },
    }
});



export const { addCity, deleteCity } = citiesSlice.actions;

export const cityReducer = citiesSlice.reducer;