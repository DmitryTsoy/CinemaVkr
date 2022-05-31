import { MainInfoProps } from "../MovieInfoProps";


export default function MovieInfoSub(props: MainInfoProps) {

    const { activeMovie } = props;


    return (
        <div className="info__sub">
            <div className="info__raiting">
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.475 16L13 13.125L8.525 16L9.875 10.85L5.7625 7.5L11.075 7.175L13 2.25L14.925 7.175L20.2375 7.5L16.125 10.85L17.475 16ZM23 10C23 8.6125 24.125 7.5 25.5 7.5V2.5C25.5 1.1125 24.375 0 23 0H3C2.33696 0 1.70107 0.263392 1.23223 0.732233C0.763392 1.20107 0.5 1.83696 0.5 2.5V7.5C1.8875 7.5 3 8.625 3 10C3 10.663 2.73661 11.2989 2.26777 11.7678C1.79893 12.2366 1.16304 12.5 0.5 12.5V17.5C0.5 18.163 0.763392 18.7989 1.23223 19.2678C1.70107 19.7366 2.33696 20 3 20H23C23.663 20 24.2989 19.7366 24.7678 19.2678C25.2366 18.7989 25.5 18.163 25.5 17.5V12.5C24.837 12.5 24.2011 12.2366 23.7322 11.7678C23.2634 11.2989 23 10.663 23 10Z" fill="#FFD600" />
                </svg>
                <p> {activeMovie.raiting} </p>
            </div>
            <div className="info__actors">
                <p>Список аткёров</p>
                <div className="info__actors-list">
                    {activeMovie.actorsList.map(e => (<p key={e}>{e}</p>))}
                </div>
            </div>
        </div>)
}