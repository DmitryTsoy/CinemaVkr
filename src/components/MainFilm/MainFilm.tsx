import "./MainFilm.scss"
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { GoToFilmBig } from "../Buttons/GoToFilmBig";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




export default function () {


    return (
        <div className="mainFilm">
            <div className="mainFilm__back">
                <img src="https://res.cloudinary.com/dhp6tpvfl/image/upload/v1653772880/Cinima/stretched-1920-1080-1012576_evbu93.jpg" alt="" />
                <div className="mainFilm__grad"></div>
            </div>
            <div className="mainFilm__info">
                <div className="mainFilm__title">
                    <p>
                        John Wick 3 : Parabellum
                    </p>
                </div>
                <div className="mainFilm__raiting">
                    <LocalActivityIcon sx={{ width: "40px", height: "auto", color: "#FFFF00" }} />
                    <p>8.5</p>
                </div>
                <div className="mainFilm__description">
                    <p>
                        John Wick is on the run after killing a member of the
                        international assassins' guild, and with a $14 million
                        price tag on his head, he is the target of hit men and
                        women everywhere.
                    </p>
                </div>
                <GoToFilmBig><PlayArrowIcon />Купить билет</GoToFilmBig>


            </div>
        </div>)
}