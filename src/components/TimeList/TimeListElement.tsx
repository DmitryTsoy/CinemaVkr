import { useDispatch } from "react-redux";
import { TSessionListElement } from "../../data/sessionList";
import { setValue } from "../../redux/reducers/sessionSlice";
import { TimeButton } from "../Buttons/TimeButton";


export default function TimeListElement(props: { element: TSessionListElement }) {

    const { element } = props;
    const dispatch = useDispatch();

    function openSession() {


        dispatch(setValue({ isOpen: true, session: element }))
    }

    return (
        <TimeButton onClick={e => openSession()}>
            {element.sessionTime}
        </TimeButton>
    )
}