import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import { Home } from './pages/Home/Home';
import { useDispatch, useSelector } from "react-redux";
import { setMovieList, setMovieMain } from "./redux/actions/movieListActions"
import MoviePage from './pages/Movie/MoviePage';
import { RootState } from './redux/store/store';
import LoaderPage from './pages/Loader/LoaderPage';
import { setSessionList } from './redux/actions/sessionListActions';
import SessionsPage from './pages/SessionsPage/SessionsPage';
import ErrorPage from './pages/Error/ErrorPage';
import SessionWindow from './pages/SessonWindow/SessionWindow';
import AuthWindow from './pages/Auth/AuthWindow';
import { setHistory } from './redux/actions/historyActions';
import HistoryPage from './pages/History/HistoryPage';
import Footer from './components/Footer/Footer';
import SessionsSoonPage from './pages/SessionsSoon/SessionsSoonPage';

function App() {

  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList.movieList)

  useEffect(() => {

    dispatch(setMovieList())
    dispatch(setMovieMain())
    dispatch(setSessionList())
    //dispatch(setHistory())


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
            <Route path='/soon' element={<SessionsSoonPage />} />

            <Route path='/history' element={<HistoryPage />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />

        </>
        :
        <LoaderPage />
      }
    </>

  );
}

export default App;
