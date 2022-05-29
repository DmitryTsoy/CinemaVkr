import { useNavigate } from 'react-router-dom';
import { Link, Location, unstable_HistoryRouter, useLocation } from "react-router-dom";
import './Header.scss'
import { UserButtonTwo, UserButton } from "../Buttons/HeaderButtons";

export default function Header() {


  return (

    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <p>Cinema</p>
        </div>
        <div className="header__menu">
          <Link to={"/"}>
            Element
          </Link>
          <Link to={"/"}>
            Element
          </Link>
          <Link to={"/"}>
            Element
          </Link>
          <Link to={"/"}>
            Element
          </Link>
        </div>
        <div className="header__user">
          
          <UserButtonTwo variant="text">
            Вход
          </UserButtonTwo>
        </div>
      </div>
    </header>
  )

}

