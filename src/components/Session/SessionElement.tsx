import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store";



export default function SessionElement(props: { row: number, place: number }) {

    const { row, place } = props;
    const [state, setState] = useState<"free" | "active" | "busy">("free");
    const reservedPlaces = useSelector((state: RootState) => state.session.session?.reservedPlaces);

    useEffect(() => {
        reservedPlaces?.map((e) => {
            if (e.row === row && e.place === place)
                setState("busy");
        })
    }, [])

    function setActive() {

        setState("active");

    }

    function setAnActive() {

        setState("free");

    }


    return (
        <>
            {state === "free"
                ?
                <div onClick={e => setActive()} className="oneSession__array-element oneSession__array-element--free">
                    {place}
                </div>
                :
                <>{state === "busy"
                    ?
                    <div  className="oneSession__array-element oneSession__array-element--busy">
                    </div>
                    :
                    <div onClick={e => setAnActive()} className="oneSession__array-element oneSession__array-element--active">
                        {place}
                    </div>
                }</>
            }
        </>
    )
}


/*



<div className="oneSession__array-element oneSession__array-element--busy"></div>
            <div className="oneSession__array-element oneSession__array-element--free">2</div>
            <div className="oneSession__array-element oneSession__array-element--active">3</div>
            <div className="oneSession__array-element oneSession__array-element--active">4</div>
            <div className="oneSession__array-element oneSession__array-element--free">5</div>
            <div className="oneSession__array-element oneSession__array-element--free">6</div>
        



*/