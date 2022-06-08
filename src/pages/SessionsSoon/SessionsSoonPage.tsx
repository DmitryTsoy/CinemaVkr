import SessionsList from "../../components/SessionsList/SessionsList"
import Slider from "../../components/Slider/Slider"
import "../SessionsPage/SessionsPage.scss"


export default function SessionsSoonPage() {



    return (



        <div className="sessions">


            <div className="sessions__container">
                <div className="sessions__name">
                    <p>Скоро в кино</p>
                </div>
                <SessionsList typeList="Скоро в кино" />
            </div>

        </div>
    )
}