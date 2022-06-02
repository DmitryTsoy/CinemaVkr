// import { Home } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { ImportExportTwoTone } from '@mui/icons-material';
import Header from './components/Header/Header'
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Provider, useDispatch, useSelector } from "react-redux";
import { setMovieList, setMovieMain } from "./redux/actions/movieListActions"
import MoviePage from './pages/Movie/MoviePage';
import { RootState } from './redux/store/store';
import LoaderPage from './pages/Loader/LoaderPage';
import { setSessionList } from './redux/actions/sessionListActions';
import SessionsPage from './pages/SessionsPage/SessionsPage';
import ErrorPage from './pages/Error/ErrorPage';
import SessionWindow from './pages/SessonWindow/SessionWindow';
import AuthWindow from './pages/Auth/AuthWindow';

function App() {

  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList.movieList)

  useEffect(() => {

    dispatch(setMovieList())
    dispatch(setMovieMain())
    dispatch(setSessionList())


  }, [])

  return (
    <>
      {movieList.length
        ?
        <>
          <Header />
          <SessionWindow />
          <AuthWindow />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:title' element={<MoviePage />} />
            <Route path='/sessions' element={<SessionsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </>
        :
        <LoaderPage />
      }
    </>

  );
}

export default App;
