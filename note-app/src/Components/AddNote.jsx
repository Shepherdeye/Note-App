import { useDispatch } from "react-redux"
import { addNotes } from "../Redux/Features/NoteSlice/NoteSlice";
import { useState } from "react";

const AddNote = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const remaining = 200 - value.length;
    const handleAddnote = () => {
        if (value !== "") {
            dispatch(addNotes(value));
            setValue("");
        } else {
            alert("Please enter a note")
        };


    }
    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={value}
                onChange={(e) => remaining > 0 ? setValue(e.target.value) : false}
            ></textarea>
            <div className='note-footer'>
                <small>
                    {remaining} Remaining
                </small>
                <button className='save'
                    onClick={handleAddnote}
                >
                    Save
                </button>
            </div>
        </div >
    );
};

export default AddNote;