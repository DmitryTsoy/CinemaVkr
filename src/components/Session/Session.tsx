import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { BuyButton } from "../Buttons/BuyButton"
import "./Session.scss"

export default function Session() {

    const session = useSelector((state: RootState) => state.session.session);


    return (
        <div className="oneSession">

            <div className="oneSession__name">
                <div className="oneSession__title">
                    <p>{session?.filmName}</p>
                </div>
                <div className="oneSession__time">
                    <p>{session?.sessionTime}</p>
                </div>
            </div>
            <div className="oneSession__places">


                <div className="oneSession__places-container">

                    <div className="oneSession__array">

                    </div>
                    <BuyButton>Купить билет</BuyButton>
                </div>

            </div>

        </div>)
}