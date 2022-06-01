import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import "./SessionsList.scss"
import SessionsListElement from "./SessionsListElement"


export default function SessionsList(props: { typeList: string }) {

    const { typeList } = props;

    const sessionsList = useSelector((state: RootState) => state.movieList.movieList)

    return (
        <div className="sessionsList">

            {sessionsList?.map((element) => {
                if (typeList === element.type)
                    return (<SessionsListElement key={element.title} element={element} />
                    )
            })}

        </div>)
}