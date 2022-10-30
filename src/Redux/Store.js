import { configureStore } from "@reduxjs/toolkit"
import Snai3yReducer from "./Slices/Snai3yReducer"
import ClientReducer from "./Slices/ClientReducer"

export const store = configureStore({
    reducer:
    {
        Snai3yReducer,
        ClientReducer
    },

})