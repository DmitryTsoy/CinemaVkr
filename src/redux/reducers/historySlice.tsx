import { createSlice } from "@reduxjs/toolkit";
import { setHistory } from "../actions/historyActions";
import { THistory } from "../../data/historyData";



export interface IHistorySlice {
    history: THistory,
}


const initialState: IHistorySlice = {
    history: [],
}


const sliceName = "history";

export const historySlice = createSlice({


    name: sliceName,
    initialState,
    reducers: {



    },
    extraReducers: (builder) => {

        builder.addCase(setHistory.fulfilled, (state, action) => {

            state.history = action.payload;

        })

    }

})




export const {



} = historySlice.actions
