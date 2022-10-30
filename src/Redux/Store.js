import { configureStore } from "@reduxjs/toolkit"
import Snai3yReducer from "./Slices/Snai3yReducer"
export const store = configureStore({
    reducer:
    {
        Snai3yReducer
    },

})