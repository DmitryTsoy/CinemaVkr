import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HistoryList from "../../components/HistoryList/HistoryList"
import { setHistory } from "../../redux/actions/historyActions";
import { RootState } from "../../redux/store/store";
import "./HistoryPage.scss"


export default function HistoryPage() {

    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const userData = useSelector((state: RootState) => state.user.userData);

    useEffect(() => {


        if (userData !== null && isAuth)
            dispatch(setHistory({ email: userData.email }));


    }, [])

    return (


        <div className="history">
            <div className="history__container">

                <div className="sessions__name">
                    <p>История покупок</p>
                </div>
                <HistoryList />
            </div>
        </div>
    )
}