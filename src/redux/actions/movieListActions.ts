import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieData, movieMain } from "../../data/movieData";



const movieListActions = {
  SET_MOVIE_LIST: "movieList/setProductList",
  SET_MOVIE_MAIN: "movieList/setMovieMain",
}

export const setMovieList = createAsyncThunk(

  movieListActions.SET_MOVIE_LIST,
  async function () {

    return Promise.resolve(movieData);

  }
)


export const setMovieMain = createAsyncThunk(

  movieListActions.SET_MOVIE_MAIN,
  async function () {

    return Promise.resolve(movieMain);

  }
)
