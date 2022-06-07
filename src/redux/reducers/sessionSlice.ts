import { createSlice } from "@reduxjs/toolkit";
import { TSessionListElement } from "../../data/sessionList";
import { bookingAction } from "../actions/sessionActions";


export interface ISession {
    isOpen: boolean,
    session: TSessionListElement | null,
    rowArray: number[],
    placesArray: number[],
    booking: {
        row: number;
        place: number;
    }[],
    totalPrice: number,

}

const initialState: ISession = {
    isOpen: false,
    session: null,
    rowArray: [],
    placesArray: [],
    booking: [],
    totalPrice: 0,
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
            let totalPrice = JSON.parse(JSON.stringify(state, undefined, 2)).totalPrice;
            let session = JSON.parse(JSON.stringify(state, undefined, 2)).session;

            const newBooking: {
                row: number;
                place: number;
            } = action.payload;




            let index = -1;

            booking.forEach((e, i) => {

                if (e.place == newBooking.place && e.row == newBooking.row)
                    index = i;

            })


            if (index !== -1) {
                totalPrice -= session.ticketPrice;
                booking.splice(index, 1)
            }
            else {
                totalPrice += session.ticketPrice;
                booking.push(newBooking);
            }


            state.totalPrice = totalPrice;
            state.booking = booking;


        },

    },
    extraReducers: (builder) => {

        builder.addCase(bookingAction.fulfilled, (state, action) => {

            state.booking = [];
            state.session = null;
            state.isOpen = false;
            state.rowArray = [];
            state.placesArray = [];
            state.totalPrice = 0;

        })

    }




})


export const {
    setValue,
    setDeffault,
    setBooking,
} = sessionSlice.actions;

export default sessionSlice;





