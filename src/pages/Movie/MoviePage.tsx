import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieInfo from "../../components/MovieInfo/MovieInfo"
import { setActiveMovie } from "../../redux/reducers/activeMovieSlice";
import { RootState } from "../../redux/store/store";
import ErrorPage from "../Error/ErrorPage";
import "./MoviePage.scss"

export default function MoviePage() {


    const title = useParams().title;
    const movieList = useSelector((state: RootState) => state.movieList.movieList);
    const activeMovie = useSelector((state: RootState) => state.activeMovie.movieMain);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(setActiveMovie({ movieList: movieList, title: title }))


    }, [movieList])

    return (

        <>
            {activeMovie !== null
                ?
                <div className="movie">
                    <MovieInfo activeMovie={activeMovie} />
                </div>
                :
                <ErrorPage />
            }
        </>
    )


}
