import SessionsList from "../../components/SessionsList/SessionsList"
import "./SessionsPage.scss"


export default function SessionsPage() {



    return (



        <div className="sessions">


            <div className="sessions__container">
                <div className="sessions__name">
                    <p>Все сеансы</p>
                </div>
                <SessionsList typeList="Сейчас в кино" />
            </div>

        </div>
    )
}