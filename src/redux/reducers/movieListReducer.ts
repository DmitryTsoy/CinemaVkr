import { createSlice } from "@reduxjs/toolkit";
import { movieDataType } from "../../data/movieData";
import { setMovieList } from "../actions/movieListActions";


export interface IMovieList {
  movieList: movieDataType
}

const initialState: IMovieList = {
  movieList: []
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

  }

})



export default movieListSlice