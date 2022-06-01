import { useDispatch, useSelector } from "react-redux"
import Session from "../../components/Session/Session";
import { setValue } from "../../redux/reducers/sessionSlice";
import { RootState } from "../../redux/store/store"
import "./SessionWindow.scss"

export default function SessionWindow() {

    const isOpen = useSelector((state: RootState) => state.session.isOpen);
    const session = useSelector((state: RootState) => state.session.session);

    const dispatch = useDispatch();

    function closeSessionWindow() {

        dispatch(setValue({ isOpen: false, session: null }))
    }

    return (
        <>
            {(isOpen && session !== null) ?
                <div onClick={closeSessionWindow} className="sessionWindow">
                    <div onClick={e => e.stopPropagation()} className="sessionWindow__container">
                        <Session />
                    </div>
                </div>
                :
                <></>}

        </>

    )
}

/*<Dialog onClose={closeSessionWindow} open={isOpen}>
            <Session />
        </Dialog>
 */