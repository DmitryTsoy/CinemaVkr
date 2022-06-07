import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import "./TimeList.scss"
import TimeListElement from "./TimeListElement"


export default function TimeList(props: { title: string }) {

    const { title } = props;
    const sessionList = useSelector((state: RootState) => state.sessionList.sessionList);

    return (

        <>
            {sessionList !== null ?
                <div className="time">
                    {sessionList?.map((elem, index) => {
                        if (elem.filmName === title)
                            return (<TimeListElement key={elem.sessionName + index} element={elem} />)
                    })}
                </div>
                :
                <></>}

        </>
    )
}