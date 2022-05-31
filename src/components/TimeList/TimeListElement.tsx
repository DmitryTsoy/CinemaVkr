import { TSessionListElement } from "../../data/sessionList";
import { TimeButton } from "../Buttons/TimeButton";


export default function TimeListElement(props: { element: TSessionListElement }) {

    const { element } = props;

    return (
        <TimeButton>
            {element.sessionTime}
        </TimeButton>
    )
}