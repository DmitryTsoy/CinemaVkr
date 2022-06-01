import { createSlice } from "@reduxjs/toolkit";
import { TSessionListElement } from "../../data/sessionList";


export interface ISession {
    isOpen: boolean,
    session: TSessionListElement | null,
    rowArray: number[],
    placesArray: number[],
    booking: {
        row: number;
        place: number;
    }[],


}

const initialState: ISession = {
    isOpen: false,
    session: null,
    rowArray: [],
    placesArray: [],
    booking: [],
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
        },

        setDeffault: (state, action) => {

            
            state.booking = []

        },
        setBooking: (state, action) => {

            let booking: {
                row: number;
                place: number;
            }[] = JSON.parse(JSON.stringify(state, undefined, 2)).booking;

            const newBooking: {
                row: number;
                place: number;
            } = action.payload;

            /*const index = booking.findIndex((e) => {
                if (e.place === newBooking.place && e.row === newBooking.place)
                    return true;
            })*/

            // returns 1


            let index = -1;

            booking.forEach((e, i) => {

                if (e.place == newBooking.place && e.row == newBooking.row)
                    index = i;

            })


            if (index !== -1)
                booking.splice(index, 1)
            else {
                booking.push(newBooking);
            }

            state.booking = booking;


        },

    }




})


export const {
    setValue,
    setDeffault,
    setBooking,
} = sessionSlice.actions;

export default sessionSlice;





