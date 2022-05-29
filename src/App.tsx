// import { Home } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { ImportExportTwoTone } from '@mui/icons-material';
import Header from './components/Header/Header'
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Provider, useDispatch } from "react-redux";
import { setMovieList, setMovieMain } from "./redux/actions/movieListActions"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setMovieList())
    dispatch(setMovieMain())


  }, [])

  return (
    <>

      <Header />


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />


      </Routes>



    </>
  );
}

export default App;
