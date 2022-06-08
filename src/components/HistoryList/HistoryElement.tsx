import { useCallback, useRef } from "react";
import ReactToPrint from "react-to-print";
import { THistoryElement, THistoryReservedPlaces } from "../../data/historyData";



export default function HistoryElement(props: { block: THistoryElement, element: THistoryReservedPlaces }) {

    const { block, element } = props;
    const componentRef = useRef<HTMLDivElement>(null);

    const reactToPrintContent = useCallback(() => {
        return componentRef.current;
    }, [componentRef.current]);
    const reactToPrintTrigger = useCallback(() => {
        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
        // to the root node of the returned component as it will be overwritten.

        // Bad: the `onClick` here will be overwritten by `react-to-print`
        // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

        // Good
        return (
            <div className="historyList__control">
                <p>распечатать</p>
            </div>
        ); // eslint-disable-line max-len
    }, []);
    return (
        <>

            <div ref={componentRef} className="historyList__element">
                <div className="historyList__info">

                    <div className="historyList__info-name">
                        <p>{block.filmName}</p>
                    </div>
                    <div className="historyList__info-time">
                        <p>{block.sessionTime}</p>
                    </div>
                    <div className="historyList__info-item">
                        <p>{block.nameHall}</p>
                        <p>Ряд {element.row}</p>
                        <p>Ряд {element.place}</p>

                    </div>
                    <div className="historyList__info-price">
                        <p>{block.ticketPrice} р</p>
                    </div>
                </div>
                <ReactToPrint
                    content={reactToPrintContent}
                    documentTitle="AwesomeFileName"
                    removeAfterPrint
                    trigger={reactToPrintTrigger}
                />
            </div>
        </>
    )
}