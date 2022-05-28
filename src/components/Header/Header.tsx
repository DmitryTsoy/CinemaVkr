import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link, Location, unstable_HistoryRouter, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import './Header.scss'

export default function Header() {


  return (

    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <Link to={"/"}><h1>Cinema</h1></Link>
        </div>
        <div className="header__menu">
          <div className="header__elem">
            <Link to={"/"}>Главная</Link>
            <Link to={"/session"}>Сеанс</Link>
            <Link to={"/session"}>Бронирование зала</Link>
            <Link to={"/session"}>О нас</Link>
            <Link to={"/session"}>За под над лупа</Link>
          </div>
        </div>

        <div className="header__botton"><Button variant="text">Text</Button></div>









      </div>
    </header>
  )

}

