import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionList } from "../../data/sessionList";


const sessionListActions = {
    SET_SESSION_LIST: "sessionList/setSessionList",
}




export const setSessionList = createAsyncThunk(

    sessionListActions.SET_SESSION_LIST,
    async function () {
  
      return Promise.resolve(sessionList);
  
    }
  )
