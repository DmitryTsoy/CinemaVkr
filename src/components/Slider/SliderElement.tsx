import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Link } from 'react-router-dom';
import { movieDataType, movieDataTypeElement } from '../../data/movieData';



export default function SliderElement(props: { element: movieDataTypeElement }) {
    const element = props.element;
    return (
        <div className="slider__content-element">

            <img src={element.poster} alt="" />
            <div className="slider__content-country">
                <p>{element.country}, {element.date} </p>
            </div>
            <div className="slider__content-name">
                <Link to={"/movie/" + element.title}> {element.title}</Link>
            </div>
            <div className="slider__content-raiting">
                <LocalActivityIcon sx={{ width: "30px", height: "auto", color: "#FFFF00" }} />
                <p>{element.raiting}</p>
            </div>
            <div className="slider__content-genres">
                <p>{element.genres.map((elem) => (<span key={elem}>{elem} </span>))}</p>
            </div>
        </div>
    )
}