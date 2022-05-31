import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { activeMovieSlice } from "../reducers/activeMovieSlice";
import movieListSlice from "../reducers/movieListSlice";
import sessionListSlice from "../reducers/sessionListSlice";




const reducers = {
  movieList: movieListSlice.reducer,
  activeMovie: activeMovieSlice.reducer,
  sessionList: sessionListSlice.reducer,

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