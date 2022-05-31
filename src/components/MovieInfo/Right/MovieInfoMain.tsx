import { MainInfoProps } from "../MovieInfoProps";
import MovieInfoAboutList from "./MovieInfoAboutList";


export default function MovieInfoMain(props: MainInfoProps) {

    const { activeMovie } = props;

    return (

        <div className="info__right-main">
            <div className="info__title">
                <p>
                    {activeMovie.title}
                </p>
            </div>
            <div className="info__original-title">
                <p>
                    {activeMovie.originalTitle}
                </p>
            </div>

            <div className="info__about">
                <p>
                    О фильме
                </p>
            </div>

            <MovieInfoAboutList activeMovie={activeMovie} />

            <div className="info__description">
                <p>{activeMovie.discription}</p>
            </div>


        </div>
    )
}