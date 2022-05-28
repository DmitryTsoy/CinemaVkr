import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieData } from "../../data/movieData";



const movieListActions = {
  SET_MOVIE_LIST: "movieList/setProductList",
}

export const setMovieList = createAsyncThunk(

  movieListActions.SET_MOVIE_LIST,
  async function () {

    return Promise.resolve(movieData);

  }
)

