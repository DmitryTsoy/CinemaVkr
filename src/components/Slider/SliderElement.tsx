import LocalActivityIcon from '@mui/icons-material/LocalActivity';



export default function SliderElement() {

    return (
        <div className="slider__content-element">

            <img src="https://image.tmdb.org/t/p/original/9zbl69Zl5E7nZ7O3eX81UVqDfY9.jpg" alt="" />
            <div className="slider__content-country">
                <p>USA, 2016 - Current</p>
            </div>
            <div className="slider__content-name">
                <p> Stranger Things</p>
            </div>
            <div className="slider__content-raiting">
                <LocalActivityIcon sx={{ width: "30px", height: "auto", color: "#FFFF00" }} />
                <p>8.3</p>
            </div>
            <div className="slider__content-genres">
                <p>Action, Adventure, Horror</p>
            </div>
        </div>
    )
}