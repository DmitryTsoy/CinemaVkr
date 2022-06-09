import { createAsyncThunk } from "@reduxjs/toolkit";
import { historyData } from "../../data/historyData";



const historytActions = {
    SET_HISTORY: "history/setHistory",
}

export const setHistory = createAsyncThunk(


    historytActions.SET_HISTORY,
    async function (email: { email: string }) {
        //alert(email.email)

        const req = await fetch(`http://localhost/Cinema/hs/v1/userHistory`,
            {
                method: 'POST',
                body:
                    JSON.stringify({
                        "email": email.email,
                    })
            });
        return req.json()

        //return Promise.resolve(historyData);

    }

)


