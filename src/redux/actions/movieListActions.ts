import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieData, movieDataType, movieMain } from "../../data/movieData";



const movieListActions = {
  SET_MOVIE_LIST: "movieList/setProductList",
  SET_MOVIE_MAIN: "movieList/setMovieMain",
}

export const setMovieList = createAsyncThunk(

  movieListActions.SET_MOVIE_LIST,
  async function () {



    let req;
    console.log("here")
    while (1) {
      req = await fetch(`http://localhost/Cinema/hs/v1/allFilm`, { method: 'GET', });

      if (req.ok) {
        break;
      }
    }
    if (req !== undefined) {

      const data: any = await req.json();

      if (Array.isArray(data))
        data.map(elem => {
          let str: string = elem.actorsList;
          elem.actorsList = str.split("/");
          elem.genres = [elem.genres];
        })

      return data;


    }



    //return Promise.resolve(movieData);

  }
)


export const setMovieMain = createAsyncThunk(

  movieListActions.SET_MOVIE_MAIN,
  async function () {

    return Promise.resolve(movieMain);

  }
)
