import AddNote from './AddNote.jsx';
import Note from './Note';
import { useSelector, useDispatch } from "react-redux"

const NoteList = () => {
    const notes = useSelector((state) => state.addNote.notes);
    const searchValue = useSelector((state) => state.addNote.searchValue);

    return (
        <div className='notes-list'>
            <AddNote />
            {notes.filter((note) => note.text.toLowerCase().includes(searchValue.toLowerCase()))
                .map((note) => {
                    return <Note key={note.id}
                        id={note.id}
                        text={note.text}
                        date={note.date} />
                })}

        </div>
    );
};

export default NoteList;