import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { movieDataTypeElement } from "../../data/movieData";
import { RootState } from "../../redux/store/store";
import { TrailerButton } from "../Buttons/TrailerButton";
import "./MovieInfo.scss"
import MovieInfoLeft from "./MovieInfoLeft";
import { MainInfoProps } from "./MovieInfoProps";
import MovieInfoRight from "./Right/MovieInfoRight";

export default function MovieInfo(props: MainInfoProps) {

    const { activeMovie } = props;

    return (

        <div className="info">
            <div className="info__container">
                <MovieInfoLeft activeMovie={activeMovie} />
                <MovieInfoRight activeMovie={activeMovie} />
            </div>
        </div>

    )
}