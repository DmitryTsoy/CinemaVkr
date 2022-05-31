import { MainInfoProps } from "../MovieInfoProps";

export default function MovieInfoAboutElement(props: MainInfoProps) {

    const { activeMovie } = props;



    return (



        <div className="info__about-list">
            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Год</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.date}</p>
                </div>
            </div>

            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Страна</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.country}</p>
                </div>
            </div>

            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Жанр</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.genres.map((e) => (<span key={e}>{e + " "}</span>))}</p>
                </div>
            </div>
            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Режисер</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.direction}</p>
                </div>
            </div>
            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Бюджет</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.budget}</p>
                </div>
            </div>
            <div className="info__about-element">
                <div className="info__about-type">
                    <p>Продолжительность</p>
                </div>
                <div className="info__about-param">
                    <p>{activeMovie.time}</p>
                </div>
            </div>
        </div>



    )
}