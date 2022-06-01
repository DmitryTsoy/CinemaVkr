import { createSlice } from "@reduxjs/toolkit";
import { TSessionListElement } from "../../data/sessionList";


export interface ISession {
    isOpen: boolean,
    session: TSessionListElement | null,
}

const initialState: ISession = {
    isOpen: false,
    session: null,
}

const sliceName = "session";

const sessionSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {

        setValue: (state, action) => {

            const { isOpen, session } = action.payload
            state.isOpen = isOpen;
            state.session = session;

        }


    }




})


export const {

    setValue,
} = sessionSlice.actions;

export default sessionSlice;





