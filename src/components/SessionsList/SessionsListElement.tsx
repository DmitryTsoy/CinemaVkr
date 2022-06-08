import { Link } from "react-router-dom";
import { movieDataTypeElement } from "../../data/movieData";
import { TSessionListElement } from "../../data/sessionList";
import TimeList from "../TimeList/TimeList";
import SessionsList from "./SessionsList";



export default function SessionsListElement(props: { element: movieDataTypeElement }) {

    const { element } = props;

    return (

        <div className="sessionsList__element">

            <img src={element.poster} alt="" />
            <div className="sessionsList__info">

                <div className="sessionsList__name">
                    <div className="sessionsList__title">
                        <div className="sessionsList__title-normal">
                            <Link to={"/movie/" + element.title}>{element.title}</Link>
                        </div>
                        <div className="sessionsList__title-original">
                            <Link to={"/movie/" + element.title}>{element.originalTitle}</Link>
                        </div>
                    </div>
                    <div className="sessionsList__rait">
                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.475 15.8748L13 13.1292L8.525 15.8748L9.875 10.9566L5.7625 7.75739L11.075 7.44701L13 2.74367L14.925 7.44701L20.2375 7.75739L16.125 10.9566L17.475 15.8748ZM23 10.1449C23 8.81982 24.125 7.75739 25.5 7.75739V2.98242C25.5 1.65737 24.375 0.59494 23 0.59494H3C2.33696 0.59494 1.70107 0.846478 1.23223 1.29422C0.763392 1.74196 0.5 2.34922 0.5 2.98242V7.75739C1.8875 7.75739 3 8.83175 3 10.1449C3 10.7781 2.73661 11.3853 2.26777 11.8331C1.79893 12.2808 1.16304 12.5324 0.5 12.5324V17.3073C0.5 17.9405 0.763392 18.5478 1.23223 18.9955C1.70107 19.4433 2.33696 19.6948 3 19.6948H23C23.663 19.6948 24.2989 19.4433 24.7678 18.9955C25.2366 18.5478 25.5 17.9405 25.5 17.3073V12.5324C24.837 12.5324 24.2011 12.2808 23.7322 11.8331C23.2634 11.3853 23 10.7781 23 10.1449Z" fill="#FFD600" />
                        </svg>
                        <p>{element.raiting}</p>
                    </div>
                </div>

                <div className="sessionsList__sessions">
                    
                    <TimeList title={element.title} />
                </div>

            </div>
        </div>

    )
}