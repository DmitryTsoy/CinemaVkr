import { createSlice } from "@reduxjs/toolkit";


type TUserData = {
    email: string,
}

export type THistory = {
    name: string,
    nameHall: string,
    row: number,
    place: number,
}

export interface IUserReducer {
    isLoginOpen: boolean,
    isRegistrationOpen: boolean,
    isAuth: boolean,
    isLoad: boolean,
    userData: TUserData | null,
    history: THistory[] | null,
}



const initialState: IUserReducer = {

    isLoginOpen: false,
    isRegistrationOpen: false,
    isAuth: false,
    isLoad: false,
    userData: null,
    history: null,
}


const reduserName = "user";


export const userSlice = createSlice({


    name: reduserName,
    initialState,
    reducers: {

        setDialog: (state, action) => {
            const isLoginOpen = action.payload.isLoginOpen;
            const isRegistrationOpen = action.payload.isRegistrationOpen;
            const isLoad = action.payload.isLoad;

            state.isLoginOpen = isLoginOpen;
            state.isRegistrationOpen = isRegistrationOpen;
            state.isLoad = isLoad;
        },

        setUserData: (state, action) => {
            state.userData = action.payload;
            state.isAuth = true;
        },

        logout: (state, action) => {

            state.isLoginOpen = false;
            state.isRegistrationOpen = false;
            state.isAuth = false;
            state.isLoad = false;
            state.userData = null;
        }


    },
    extraReducers: (builder) => {


    },

})


export const {
    setDialog,
    setUserData,
    logout,
} = userSlice.actions;


export default userSlice;
