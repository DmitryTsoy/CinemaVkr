import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import HistoryBlock from "./HistoryBlock"
import "./HistoryList.scss"


export default function HistoryList() {


    const history = useSelector((state: RootState) => state.history.history);


    return (
        <div className="historyList">

            {history.map((elem, index) => (
                < HistoryBlock
                    key={elem.filmName + elem.sessionTime + index}
                    block={elem} />))}
        </div>)
}


