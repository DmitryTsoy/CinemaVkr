import { createAsyncThunk } from "@reduxjs/toolkit";
import { TSessionListElement } from "../../data/sessionList";



const sliceActionsName = {
    BOOKING_ACTION: "session/booking",
}



export const bookingAction = createAsyncThunk(


    sliceActionsName.BOOKING_ACTION,
    async function (booking: {
        email: string,
        session: string,
        tickets: {
            row: number;
            place: number;
        }[]
    }) {


        const req = await fetch(`http://localhost/Cinema/hs/v1/ticket`,
            {
                method: 'POST',
                body:
                    JSON.stringify({
                        "email": booking.email,
                        "sessionName": booking.session,
                        "tickets": booking.tickets
                    })
            });
        console.log(req);
       // return req

    }

)

