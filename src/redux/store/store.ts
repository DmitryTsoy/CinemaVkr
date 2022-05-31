import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { activeMovieSlice } from "../reducers/activeMovie";
import movieListSlice from "../reducers/movieListReducer";




const reducers = {
  movieList: movieListSlice.reducer,
  activeMovie: activeMovieSlice.reducer,
};


const rootReducer = combineReducers({
  ...reducers,
});


export type RootState = ReturnType<typeof rootReducer>


const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export default setupStore;