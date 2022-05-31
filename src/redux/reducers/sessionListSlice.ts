import { createSlice } from "@reduxjs/toolkit";
import { TSessionList } from "../../data/sessionList";
import { setSessionList } from "../actions/sessionListActions";




export interface ISessionList {
    sessionList: TSessionList | null,
}

const initialState: ISessionList = {
    sessionList: null,
}

const sliceName = "sessioList";


const sessionListSlice = createSlice({

    name: sliceName,
    initialState,
    reducers: {



    },
    extraReducers: (builder) => {

        builder.addCase(setSessionList.fulfilled, (state, action) => {

            state.sessionList = action.payload;

        })

    }

})


export const { } = sessionListSlice.actions;


export default sessionListSlice;