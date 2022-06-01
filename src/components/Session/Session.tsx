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

                    <div className="oneSession__places-container-wrapper">
                        <div className="oneSession__array">

                            <div className="oneSession__array-row">
                                <div className="oneSession__array-rows">
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>4</p>
                                    <p>5</p>
                                </div>
                            </div>

                            <div className="oneSession__array-screen">
                                <div></div>
                            </div>

                            <div className="oneSession__array-places">

                                <div className="oneSession__array-line">
                                    <div className="oneSession__array-element oneSession__array-element--busy"></div>
                                    <div className="oneSession__array-element oneSession__array-element--free">2</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">3</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">4</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">5</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">6</div>
                                </div>




                                <div className="oneSession__array-line">
                                    <div className="oneSession__array-element oneSession__array-element--busy"></div>
                                    <div className="oneSession__array-element oneSession__array-element--free">2</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">3</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">4</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">5</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">6</div>
                                </div>

                                <div className="oneSession__array-line">
                                    <div className="oneSession__array-element oneSession__array-element--busy"></div>
                                    <div className="oneSession__array-element oneSession__array-element--free">2</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">3</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">4</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">5</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">6</div>
                                </div>

                                <div className="oneSession__array-line">
                                    <div className="oneSession__array-element oneSession__array-element--busy"></div>
                                    <div className="oneSession__array-element oneSession__array-element--free">2</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">3</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">4</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">5</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">6</div>
                                </div>

                                <div className="oneSession__array-line">
                                    <div className="oneSession__array-element oneSession__array-element--busy"></div>
                                    <div className="oneSession__array-element oneSession__array-element--free">2</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">3</div>
                                    <div className="oneSession__array-element oneSession__array-element--active">4</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">5</div>
                                    <div className="oneSession__array-element oneSession__array-element--free">6</div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <BuyButton>Купить билет</BuyButton>
                </div>

            </div>

        </div>)
}