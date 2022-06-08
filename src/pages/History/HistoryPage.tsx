import HistoryList from "../../components/HistoryList/HistoryList"
import "./HistoryPage.scss"


export default function HistoryPage() {


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