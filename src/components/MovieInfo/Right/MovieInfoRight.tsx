import { MainInfoProps } from "../MovieInfoProps";
import MovieInfoAboutList from "./MovieInfoAboutList";
import MovieInfoMain from "./MovieInfoMain";
import MovieInfoSub from "./MovieInfoSub";

export default function MovieInfoRight(props: MainInfoProps) {

    const { activeMovie } = props;



    return (

        <div className="info__right">
            <MovieInfoMain activeMovie={activeMovie} />
            <MovieInfoSub activeMovie={activeMovie} />
        </div>

    )
}