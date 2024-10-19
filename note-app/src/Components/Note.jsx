import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from "react-redux"
import { removeNotes } from "../Redux/Features/NoteSlice/NoteSlice"
const Note = ({ id, date, text }) => {
    const dispatch = useDispatch()

    return (
        <div className='note'>
            <span>{text ? text : "no text found !"}</span>
            <div className='note-footer'>
                <small>{date ? date : "no date found !"}</small>
                <MdDeleteForever
                    onClick={() => dispatch(removeNotes(id))}
                    className='delete-icon'
                    size='1.3em'
                />
            </div>
        </div>
    );
};

export default Note;