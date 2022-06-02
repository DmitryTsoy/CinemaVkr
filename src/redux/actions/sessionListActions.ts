import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionList } from "../../data/sessionList";


const sessionListActions = {
  SET_SESSION_LIST: "sessionList/setSessionList",
}




export const setSessionList = createAsyncThunk(

  sessionListActions.SET_SESSION_LIST,
  async function () {


    let req;
    console.log("here")
    while (1) {
      req = await fetch(`http://localhost/Cinema/hs/v1/allSession`, { method: 'GET', });

      if (req.ok) {
        break;
      }
    }
    if (req !== undefined) {

      const data: any = await req.json();

      return data;


    }





    //return Promise.resolve(sessionList);

  }
)
