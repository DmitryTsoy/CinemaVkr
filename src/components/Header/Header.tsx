import { useNavigate } from 'react-router-dom';
import { Link, Location, unstable_HistoryRouter, useLocation } from "react-router-dom";
import './Header.scss'
import { UserButtonTwo, UserButton } from "../Buttons/HeaderButtons";
import { useDispatch } from 'react-redux';
import { setDialog } from '../../redux/reducers/userReducer';

export default function Header() {

  const dispatch = useDispatch();


  function openWindow() {
    dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: false }))
  }

  return (

    <header className="header">
      <div className="header__container">

        <div className="header__logo">
          <Link to={"/"}>Cinema</Link>
        </div>
        <div className="header__menu">
          <Link to={"/sessions"}>
            Сеансы
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

          <UserButtonTwo onClick={e => openWindow()} variant="text">
            Вход
          </UserButtonTwo>
        </div>
      </div>
    </header>
  )

}

