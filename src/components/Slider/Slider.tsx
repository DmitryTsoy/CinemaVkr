import { Link } from "react-router-dom";
import "./Slider.scss"
import SliderElement from "./SliderElement";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SliderArrow } from "../Buttons/SliderArrow";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SliderClass from "../../utils/SliderClass";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

type TSliderProps = {
    type: string,
    name: string,
    id: string,
}

export default function Slider(props: TSliderProps) {
    const { type, name, id } = props;
    const slider = new SliderClass(id, "slider", 355);
    const movieList = useSelector((state: RootState) => state.movieList.movieList);

    return (
        <div className="slider" >
            <div className="slider__container">
                <div className="slider__name">
                    <p>{name}</p>
                    <Link to={""}>Увидеть больше <ArrowRightIcon sx={{ width: "30px", height: "auto" }} /></Link>
                </div>
                <div className="slider__content">
                    <SliderArrow onClick={e => { slider.slideLeft() }}><ArrowBackIosNewIcon /></SliderArrow>
                    <div id="slider" className="slider__content-containerSlider">
                        <div id={id} className="slider__content-flexLine">

                            {movieList.map((elem) => {

                                if (elem.type === type)
                                    return (<SliderElement key={elem.title} element={elem} />)

                            })}
                        </div>
                    </div>
                    <SliderArrow onClick={e => slider.slideRight()}><ArrowForwardIosIcon /></SliderArrow>
                </div>
            </div>
        </div>)
}

