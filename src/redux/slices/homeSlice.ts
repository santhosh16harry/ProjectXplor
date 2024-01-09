import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    customersList: [],
    selectedCustomer: null,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setcustomerList: (state, action) => {
            state.customersList = action.payload;
        },
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload;
        }
    }
})

export const {
    setcustomerList,
    setSelectedCustomer
} = homeSlice.actions;

export default homeSlice.reducer;