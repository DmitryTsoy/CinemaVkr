import { createSlice } from "@reduxjs/toolkit";
import { movieDataType, movieDataTypeElement } from "../../data/movieData";




export interface IActiveMovie {

    movieMain: movieDataTypeElement | null,

}


const initialState = {
    movieMain: null
}
const sliceName = "activeMovie";



export const activeMovieSlice = createSlice({


    name: sliceName,
    initialState,
    reducers: {

        setActiveMovie: (state, acton) => {

            const movieList: movieDataType = acton.payload.movieList;
            const title: string = acton.payload.title;
            let movie: movieDataTypeElement | null = null;

            movieList.forEach((elem) => {
                if (elem.title === title)
                    movie = elem;
            })

            state.movieMain = movie;

        }



    }

})


export const {
    setActiveMovie,
} = activeMovieSlice.actions;


