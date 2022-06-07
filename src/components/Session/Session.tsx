import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingAction } from "../../redux/actions/sessionActions";
import { RootState } from "../../redux/store/store";
import { BuyButton } from "../Buttons/BuyButton"
import "./Session.scss"
import SessionLine from "./SessionLine";

export default function Session() {

    const [openError, setOpenError] = useState(false);
    
    const totalPrice = useSelector((state: RootState) => state.session.totalPrice);
    const booking = useSelector((state: RootState) => state.session.booking);
    const session = useSelector((state: RootState) => state.session.session);
    const rowArray = useSelector((state: RootState) => state.session.rowArray);
    const userEmail = useSelector((state: RootState) => state.user.userData?.email);
    const isAuth = useSelector((state: RootState) => state.user.isAuth);

    const dispatch = useDispatch();


    function errorClose() {
        setOpenError(false);
    };
    function errorOpen() {
        setOpenError(true);
    };


    function handleClick() {

        if (!isAuth) {
            errorOpen();
        }

        if (isAuth && userEmail !== undefined && session?.sessionName !== undefined) {
            dispatch(bookingAction({ email: userEmail, session: session?.sessionName, tickets: booking }))
        }


    }


    return (
        <div className="oneSession">

            <div className="oneSession__name">
                <div className="oneSession__name-static">

                    <div className="oneSession__title">
                        <p>{session?.filmName}</p>
                    </div>
                    <div className="oneSession__time">
                        <p>{session?.sessionTime}</p>
                    </div>
                    <div className="oneSession__time">
                        <p>{session?.nameHall}</p> <p>Цена билета: {session?.ticketPrice} р.</p>
                    </div>
                </div>
                <div className="oneSession__name-dinamic">

                    <div className="oneSession__time">
                        <p>Сумма: {totalPrice} р.</p>
                    </div>
                </div>

            </div>

            <div className="oneSession__places">


                <div className="oneSession__places-container">

                    <div className="oneSession__places-container-wrapper">
                        <div className="oneSession__array">

                            <div className="oneSession__array-row">
                                <div className="oneSession__array-rows">
                                    {rowArray.map(e => { return (<p key={e}>{e}</p>) })}
                                </div>
                            </div>

                            <div className="oneSession__array-screen">
                                <div></div>
                            </div>

                            <div className="oneSession__array-places">
                                {rowArray.map(e => {

                                    return (<SessionLine row={e} key={"row" + e} />)

                                })}

                            </div>
                        </div>
                    </div>
                    <BuyButton onClick={e => handleClick()}>Купить билет</BuyButton>
                </div>

            </div>
            <Snackbar open={openError} autoHideDuration={6000} onClose={errorClose}>
                <Alert onClose={errorClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    Ошибка авторизации
                </Alert>
            </Snackbar>
        </div>)
}