import { createAsyncThunk } from "@reduxjs/toolkit";
import { historyData } from "../../data/historyData";



const historytActions = {
    SET_HISTORY: "history/setHistory",
}

export const setHistory = createAsyncThunk(


    historytActions.SET_HISTORY,
    async function () {

        return Promise.resolve(historyData);

    }

)


