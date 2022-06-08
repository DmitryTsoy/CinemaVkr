import { createSlice } from "@reduxjs/toolkit";
import { setHistory } from "../actions/historyActions";



export interface IHistory {

    history: any,

}


const initialState = {
    movieMain: "any"
}


const sliceName = "history";

export const historySlice = createSlice({


    name: sliceName,
    initialState,
    reducers: {



    },
    extraReducers: (builder) => {

        builder.addCase(setHistory.fulfilled, (state, action) => {

            

        })

    }

})




export const {



} = historySlice.actions
