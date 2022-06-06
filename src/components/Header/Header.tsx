import { useNavigate } from 'react-router-dom';
import { Link, Location, unstable_HistoryRouter, useLocation } from "react-router-dom";
import './Header.scss'
import { UserButtonTwo, UserButton } from "../Buttons/HeaderButtons";
import { useDispatch, useSelector } from 'react-redux';
import { setDialog } from '../../redux/reducers/userReducer';
import { RootState } from '../../redux/store/store';

export default function Header() {

  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userEmail = useSelector((state: RootState) => state.user.userData?.email);

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

          {(isAuth && userEmail !== null)
            ?
            <UserButtonTwo variant="text">
              {userEmail}
            </UserButtonTwo>
            :
            <UserButtonTwo onClick={e => openWindow()} variant="text">
              Вход
            </UserButtonTwo>
          }
        </div>
      </div>
    </header>
  )

}

