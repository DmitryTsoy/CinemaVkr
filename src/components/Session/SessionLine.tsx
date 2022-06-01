import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import SessionElement from "./SessionElement"


export default function SessionLine(props: { row: number }) {

    const { row } = props;
    const placesArray = useSelector((state: RootState) => state.session.placesArray)

    return (


        <div className="oneSession__array-line">

            {placesArray.map(e => {

                return (<SessionElement key={row + e} row={row} place={e} />)
            })}

        </div>
    )
}

/* */