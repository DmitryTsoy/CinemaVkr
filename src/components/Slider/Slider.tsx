import { Link } from "react-router-dom";
import "./Slider.scss"
import SliderElement from "./SliderElement";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SliderArrow } from "../Buttons/SliderArrow";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type TSliderProps = {
    type: string,
    name: string,
    id: string,
}

export default function Slider(props: TSliderProps) {
    const { type, name, id } = props;


    return (
        <div className="slider" >
            <div className="slider__container">
                <div className="slider__name">
                    <p>{name}</p>
                    <Link to={""}>Увидеть больше <ArrowRightIcon sx={{ width: "30px", height: "auto" }} /></Link>
                </div>
                <div className="slider__content">
                    <SliderArrow><ArrowBackIosNewIcon /></SliderArrow>
                    <div className="slider__content-containerSlider">
                        <div className="slider__content-flexLine">
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />
                            <SliderElement />

                            <SliderElement />


                        </div>
                    </div>
                    <SliderArrow><ArrowForwardIosIcon /></SliderArrow>
                </div>
            </div>
        </div>)
}

