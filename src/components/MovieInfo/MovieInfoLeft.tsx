import { useSelector } from "react-redux";
import { MainInfoProps } from "./MovieInfoProps";


export default function MovieInfoLeft(props: MainInfoProps) {
    const { activeMovie } = props;


    return (
        <div className="info__left">
            <img src={activeMovie.poster} alt="" />
            <a href={"https://www.youtube.com/"}>Трейлер</a>
        </div>
    )
}