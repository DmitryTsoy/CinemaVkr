import { createSlice } from "@reduxjs/toolkit";
import { movieDataType, movieDataTypeElement } from "../../data/movieData";
import { setMovieList, setMovieMain } from "../actions/movieListActions";


export interface IMovieList {
  movieList: movieDataType,
  movieMain: movieDataTypeElement | null,
}

const initialState: IMovieList = {
  movieList: [],
  movieMain: null,
}

const sliceMovieList = "movieList";


const movieListSlice = createSlice({

  name: sliceMovieList,
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {

    builder.addCase(setMovieList.fulfilled, (state, action) => {

      state.movieList = action.payload;

    })
    builder.addCase(setMovieMain.fulfilled, (state, action) => {

      state.movieMain = action.payload;

    })

  }

})



export default movieListSlice