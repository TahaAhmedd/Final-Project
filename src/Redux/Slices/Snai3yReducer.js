import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const Snai3yReducer = createSlice({
    name:"Snai3yData",
    initialState:{data:{}},
    reducers:{
        setData: (state,action)=>{

            // console.log("jjiijjijii")
            state.data=action.payload
        },
        
    }
})


const id = localStorage.getItem("id")
console.log(id)
export const getSnai3y =()=> async (dispatch) =>{
        const res = await axios.get(`http://localhost:7000/sanai3y/sanai3ies/${id}`);
        // console.log(res.data.Data);
        dispatch(setData(res.data.Data));
}



export const {setData,getDataSnai3y} = Snai3yReducer.actions
// export const showSnai3yData = (state)=> state.Snai3yData.data
export default Snai3yReducer.reducer