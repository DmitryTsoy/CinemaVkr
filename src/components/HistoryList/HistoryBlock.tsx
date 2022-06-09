import { THistoryElement } from "../../data/historyData";
import HistoryElement from "./HistoryElement";



export default function HistoryBlock(props: { block: THistoryElement }) {

    const { block } = props;


    return (

        <div className="historyList__block">
            <div className="historyList__name">
                <p>
                    {block.filmName}
                </p>
            </div>
            <div className="historyList__time">
                <p>
                    {block.sessionTime}
                </p>
            </div>

            <div className="historyList__list">



                {block.reservedPlaces.map((elem, index) => (
                    <HistoryElement
                        key={block.filmName +elem.place+elem.row+block.nameHall +index}
                        block={block}
                        element={elem} />
                ))}
            </div>
        </div>

    )
}