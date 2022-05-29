import "./MainFilm.scss"
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { GoToFilmBig } from "../Buttons/GoToFilmBig";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";




export default function () {

    const movieMain = useSelector((state: RootState) => state.movieList.movieMain);


    return (
        <div className="mainFilm">
            <div className="mainFilm__back">
                <img src={movieMain?.background} alt="" />
                <div className="mainFilm__grad"></div>
            </div>
            <div className="mainFilm__info">
                <div className="mainFilm__title">
                    <p>
                        {movieMain?.title}
                    </p>
                </div>
                <div className="mainFilm__raiting">
                    <LocalActivityIcon sx={{ width: "40px", height: "auto", color: "#FFFF00" }} />
                    <p>
                        {movieMain?.raiting}
                    </p>
                </div>
                <div className="mainFilm__description">
                    <p>
                        {movieMain?.discription}
                    </p>
                </div>
                <GoToFilmBig><PlayArrowIcon />Купить билет</GoToFilmBig>


            </div>
        </div>)
}