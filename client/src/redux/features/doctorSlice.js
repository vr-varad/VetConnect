import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState : {
        doctor : null
    },
    reducers : {
        setDoctor :(state,action)=>{
            state.doctor = action.payload
        },
        removeDoctor : (state)=>{
            state.doctor = null
        }
    }
})


export const {setDoctor,removeDoctor} = doctorSlice.actions