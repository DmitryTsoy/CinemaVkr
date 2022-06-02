import { FormControl, Input, InputLabel } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BuyButton } from "../../components/Buttons/BuyButton";
import { GoToFilmBig } from "../../components/Buttons/GoToFilmBig";
import { UserButtonTwo } from "../../components/Buttons/HeaderButtons";
import { setDialog } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";
import "./AuthWindow.scss"

type State = {
    email: string,
    pass: string
}

export default function AuthWindow() {
    const [values, setValues] = useState<State>({
        email: '',
        pass: '',
    });
    const dispatch = useDispatch();
    const isLoginOpen = useSelector((state: RootState) => state.user.isLoginOpen);
    function closeWindow() {
        dispatch(setDialog({ isLoginOpen: false, isRegistrationOpen: false, isLoad: false }))
    }

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });

    };


    return (
        <>
            {
                isLoginOpen ?
                    <div onClick={e => closeWindow()} className="authWindow">
                        <div onClick={e => e.stopPropagation()} className="authWindow__container">

                            <div className="authWindow__name">
                                <p>Войти</p>
                            </div>
                            <form action="">

                                <FormControl variant="standard">
                                    <InputLabel sx={{ color: "#ffffff", '&:hover': { color: "#BE123C" } }} htmlFor="standard-adornment-email">email</InputLabel>
                                    <Input
                                        sx={{ color: "#ffffff", '&:hover': { color: "#BE123C" } }}
                                        id="standard-adornment-password"
                                        type={'email'}
                                        value={values.email}
                                        onChange={handleChange('email')} />
                                </FormControl>
                                <FormControl variant="standard">
                                    <InputLabel sx={{ color: "#ffffff", '&:hover': { color: "#BE123C" } }} htmlFor="standard-adornment-password">password</InputLabel>
                                    <Input
                                        sx={{ color: "#ffffff", '&:hover': { color: "#BE123C" } }}
                                        id="standard-adornment-password"
                                        type={'password'}
                                        value={values.pass}
                                        onChange={handleChange('pass')}
                                    />
                                </FormControl>

                            </form>
                            <GoToFilmBig>Принять</GoToFilmBig>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>

    )
}