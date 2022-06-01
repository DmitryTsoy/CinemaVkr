import { createSlice } from "@reduxjs/toolkit";
import { TSessionListElement } from "../../data/sessionList";


export interface ISession {
    isOpen: boolean,
    session: TSessionListElement | null,
    rowArray: number[],
    placesArray: number[],

}

const initialState: ISession = {
    isOpen: false,
    session: null,
    rowArray: [],
    placesArray: [],
}

const sliceName = "session";

const sessionSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {

        setValue: (state, action) => {

            const { isOpen, session } = action.payload
            let rowArray: number[] = [];
            let placesArray: number[] = [];

            if (session !== null) {

                for (let i = 1; i <= session.colRow; i++)
                    rowArray.push(i);


                for (let i = 1; i <= session.colPlace; i++)
                    placesArray.push(i);
            }

            state.isOpen = isOpen;
            state.session = session;
            state.rowArray = rowArray;
            state.placesArray = placesArray;

        }


    }




})


export const {

    setValue,
} = sessionSlice.actions;

export default sessionSlice;





