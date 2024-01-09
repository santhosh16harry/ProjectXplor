import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "../slices/homeSlice";

const reducers = combineReducers({
    home: homeReducer
})

export default reducers