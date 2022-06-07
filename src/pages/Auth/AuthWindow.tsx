import { Alert, FormControl, Input, InputLabel, Snackbar, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BuyButton } from "../../components/Buttons/BuyButton";
import { GoToFilmBig, GoToFilmBigLoad } from "../../components/Buttons/GoToFilmBig";
import { UserButtonTwo } from "../../components/Buttons/HeaderButtons";
import { setDialog, setUserData } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/store/store";
import loginFetch from "../../utils/loginFetch";
import "./AuthWindow.scss"

type State = {
    email: string,
    pass: string
}


const CssTextField = styled(TextField)({
    color: "#ffffff",
    '& label.Mui-focused': {
        color: '#ffffff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ffffff',
    },
    'label': {
        color: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
        color: "#ffffff",
        '& shadow-root': {
            color: '#ffffff',
        },
        '& fieldset': {
            borderColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#d9d9d9',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#d9d9d9',
        },
    },
});

export default function AuthWindow() {

    let isLoad = useSelector((state: RootState) => state.user.isLoad);

    const [openError, setOpenError] = useState(false);
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

    function errorClose() {
        setOpenError(false);
    };

    async function submit() {

        console.log(values.email);
        console.log(values.pass);

        dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: true }))

        const res = await loginFetch(values.email, values.pass);

        console.log(res);

        switch (res.status) {
            case 200:
                //alert("ok")
                let data = await res.json()
                dispatch(setDialog({ isLoginOpen: false, isRegistrationOpen: false, isLoad: false }))
                dispatch(setUserData(data));

                break;
            default:
                dispatch(setDialog({ isLoginOpen: true, isRegistrationOpen: false, isLoad: false }))
                setOpenError(true);
        }


    }

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
                                <CssTextField
                                    autoComplete="false"
                                    label="email"
                                    id="custom-css-outlined-input"
                                    value={values.email}
                                    onChange={handleChange('email')} />

                                <CssTextField

                                    autoComplete="false"
                                    type={'password'}
                                    label="pass" id="custom-css-outlined-input"
                                    value={values.pass}
                                    onChange={handleChange('pass')}
                                />



                            </form>

                            {isLoad ?
                                <GoToFilmBigLoad loading variant="contained">
                                </GoToFilmBigLoad>
                                :
                                <GoToFilmBig onClick={e => submit()} variant="contained">
                                    OK
                                </GoToFilmBig>


                            }
                        </div>
                    </div>
                    :
                    <></>
            }
            <Snackbar open={openError} autoHideDuration={6000} onClose={errorClose}>
                <Alert onClose={errorClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    Ошибка авторизации
                </Alert>
            </Snackbar>
        </>
    )
}

//<GoToFilmBig>Принять</GoToFilmBig>
