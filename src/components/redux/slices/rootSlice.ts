import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Audi',
        model: 'A4',
        color: 'Dark Blue',
        year: 2010,
        max_speed: '140mph',
        miles_per_gallon: '32mpg',
        price: '12000'
    },
    reducers: {
        chooseName: (state, action) => { state.make = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseMiles: (state, action) => { state.miles_per_gallon = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, chooseColor, chooseMiles, chooseModel, chooseSpeed, chooseYear } = rootSlice.actions;